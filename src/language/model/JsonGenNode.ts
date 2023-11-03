import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenType} from "./JsonGenType";
import {JsonGenArgs} from "./JsonGenArgs";
import {JsonGenRange} from "./JsonGenRange";

export abstract class JsonGenNode<Value> extends JsonGenType {

    private static VAL_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defOptional'

    protected args: JsonGenArgs = new JsonGenArgs()

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
        let copy = context.child()
        this.args.forEach((v, k) => copy.define(k, v))
        return copy
    }

    abstract value(): Value

}

export abstract class StaticJsonGenNode<Value> extends JsonGenNode<Value> {
    
    private readonly _value: Value
    
    constructor(value: Value) {
        super()
        this._value = value
    }
    
    value(): Value {
        return this._value
    }

    json(context: JsonGenContext): any {
        return this.value()
    }

}

export class JsonGenNull extends StaticJsonGenNode<null> {
    constructor() {
        super(null);
    }
}

export class JsonGenBoolean extends StaticJsonGenNode<boolean> {

}

export class JsonGenNumber extends StaticJsonGenNode<number> {

}

export class JsonGenString extends StaticJsonGenNode<string> {

}

export class JsonGenObject extends StaticJsonGenNode<Map<string, JsonGenNode<any>>> {
    json(context: JsonGenContext): any {
        let objContext = this.wrapContext(context)
        let object = {}
        this.value().forEach((v, k) => {
            if (objContext.resolvePresent(v)) {
                object[k] = v.json(objContext)
            }
        })
        return object
    }
}

export class JsonGenArray<Item> extends StaticJsonGenNode<JsonGenNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defArraySize'

    attrSize(context: JsonGenContext) {
        let size = this.args.get(JsonGenArray.ATTR_SIZE)
        size = size ? size : this.args.get('0')
        return size ? size : context.get(JsonGenArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    json(context: JsonGenContext): any {
        let arrayContext = this.wrapContext(context)
        return arrayContext.resolveArray(this)
            .map((value, index) => {
                let itemContext = arrayContext.child()
                itemContext.define('index', new JsonGenNumber(index))
                return value.json(itemContext)
            })
    }

}

export class JsonGenPlaceholder<Item> extends StaticJsonGenNode<Item[]> {

    json(context: JsonGenContext): any {
        let placeholderContext = this.wrapContext(context)
        let value = context.resolvePlaceholder(this)

        if (value instanceof JsonGenType) {
            return value.json(placeholderContext)
        }

        return value
    }
}