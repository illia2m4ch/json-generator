import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenType} from "./JsonGenType";
import {JsonGenArgs} from "./JsonGenArgs";

export abstract class JsonGenNode<Value> extends JsonGenType {

    private static VAL_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defOptional'

    private readonly _value: Value

    public args: JsonGenArgs = new JsonGenArgs()

    protected constructor(value: Value) {
        super()
        this._value = value
    }

    setArgs(args: JsonGenArgs) {
        this.args = args
    }

    isOptional(context: JsonGenContext) {
        if (this.args.hasMarker(JsonGenNode.VAL_OPTIONAL)) {
            return true
        }
        return context.get(JsonGenNode.VAL_DEFAULT_OPTIONAL).value()
    }

    wrapContext(context: JsonGenContext) {
        return context.child(this)
    }

    value() {
        return this._value
    }

    isStatic(): boolean {
        return true;
    }

    json(context: JsonGenContext): any {
        return this.value()
    }

}

export class JsonGenNull extends JsonGenNode<null> {
    constructor() {
        super(null);
    }
}

export class JsonGenBoolean extends JsonGenNode<boolean> {
    public constructor(value: boolean) {
        super(value)
    }
}

export class JsonGenNumber extends JsonGenNode<number> {
    public constructor(value: number) {
        super(value)
    }
}

export class JsonGenString extends JsonGenNode<string> {
    public constructor(value: string) {
        super(value)
    }
}

export class JsonGenObject extends JsonGenNode<Map<string, JsonGenNode<any>>> {

    public constructor(value: Map<string, JsonGenNode<any>>) {
        super(value)
    }

    json(context: JsonGenContext): any {
        let objContext = this.wrapContext(context)
        let object = {}
        this.value().forEach((node, name) => {
            if (!node.isOptional(objContext) || objContext.resolver().resolveBoolean()) {
                object[name] = node.json(objContext)
            }
        })
        return object
    }

    isStatic(): boolean {
        let isStatic = true
        this.value().forEach(value => {
            if (!value.isStatic()) {
                isStatic = false
            }
        })
        return isStatic
    }
}

export class JsonGenArray<Item> extends JsonGenNode<JsonGenNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defArraySize'

    public constructor(value: JsonGenNode<Item>[]) {
        super(value)
    }

    attrSize(context: JsonGenContext) {
        let size = this.args.get(JsonGenArray.ATTR_SIZE)
        size = size ? size : this.args.get('0')
        return size ? size : context.get(JsonGenArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    json(context: JsonGenContext): any {
        let arrayContext = this.wrapContext(context)
        return arrayContext.resolver().resolveArray(arrayContext, this)
            .map((value, index) => {
                let itemContext = arrayContext.child()
                itemContext.define('index', new JsonGenNumber(index))
                return value.json(itemContext)
            })
    }

    isStatic(): boolean {
        let isStatic = true
        this.value().forEach(value => {
            if (!value.isStatic()) {
                isStatic = false
            }
        })
        return isStatic
    }

}

export class JsonGenPlaceholder<Item> extends JsonGenNode<Item[]> {

    public constructor(value: Item[]) {
        super(value);
    }

    json(context: JsonGenContext): any {
        let placeholderContext = this.wrapContext(context)
        let value = placeholderContext.resolver().resolveItem(this.value())

        if (value instanceof JsonGenType) {
            return value.json(placeholderContext)
        }

        return value
    }

    isStatic(): boolean {
        if (this.value().length > 1) {
            return false
        }

        let isStatic = true
        this.value().forEach(item => {
            if (item instanceof JsonGenType && !item.isStatic()) {
                isStatic = false
            }
        })
        return isStatic
    }

}