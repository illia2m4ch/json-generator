import {JsonGenRangeValue} from "./JsonGenRangeValue.ts";
import {JsonGenValue} from "./JsonGenValue.ts";
import {JsonGenRandom} from "./JsonGenRandom.ts";
import {JsonGenContext} from "../data/JsonGenContext";

export abstract class JsonGenNode<Value> {

    private static ATTR_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defaultOptional'

    protected attributes: Map<string, any> = new Map<string, any>()

    setAttributes(attributes: Map<string, any>) {
        this.attributes = attributes
    }

    isOptional(context: JsonGenContext) {
        if (this.attributes.has(JsonGenNode.ATTR_OPTIONAL)) {
            return true
        }
        return context.get(JsonGenNode.VAL_DEFAULT_OPTIONAL)[0]
    }

    abstract value(): Value
    abstract json(context: JsonGenContext): any
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
        let object = {}
        this.value().forEach((v, k) => {
            if (!v.isOptional(context) || JsonGenRandom.boolean()) {
                object[k] = v.json(context)
            }
        })
        return object
    }
}

export class JsonGenArray<Item> extends StaticJsonGenNode<JsonGenNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defaultArraySize'

    attrSize(context: JsonGenContext) {
        let size = this.attributes.get(JsonGenArray.ATTR_SIZE)
        return size ? size : context.get(JsonGenArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    json(context: JsonGenContext): any {
        return JsonGenRandom.items(this.value(), this.attrSize(context))
            .map((value, index) => {
                let itemContext = context.copy()
                itemContext.define('index', index)
                return value.json(context)
            })
    }

}

export class JsonGenPlaceholder<Item> extends JsonGenNode<Item> {

    private readonly _values: Item[]
    
    constructor(values: Item[]) {
        super()
        this._values = values
    }

    value(): Item {
        return JsonGenRandom.item(this._values)
    }

    json(context: JsonGenContext): any {
        let value = this.value()

        if (value instanceof JsonGenNode) {
            return value.json(context)
        }

        if (value instanceof JsonGenRangeValue) {
            return JsonGenRandom.number(value.from, value.to)
        }

        if (value instanceof JsonGenValue) {
            return JsonGenRandom.item(context.get(value.identifier, value.args))
        }

        return value
    }
}