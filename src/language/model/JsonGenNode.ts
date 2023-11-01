import {JsonGenRangeValue} from "./JsonGenRangeValue.ts";
import {JsonGenValue} from "./JsonGenValue.ts";
import {JsonGenRandom} from "./JsonGenRandom.ts";
import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenDataSet} from "../data/JsonGenDataSet";

export abstract class JsonGenNode<Value> {

    private static VAL_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defOptional'

    protected attributes: Map<string, any> = new Map<string, any>()

    setAttributes(attributes: Map<string, any>) {
        this.attributes = attributes
    }

    isOptional(context: JsonGenContext) {
        let isOptional = false
        this.attributes.forEach(value => {
            if (value instanceof JsonGenValue && value.identifier === JsonGenNode.VAL_OPTIONAL) {
                isOptional = true
            }
        })
        if (isOptional) {
            return true
        }
        return context.get(JsonGenNode.VAL_DEFAULT_OPTIONAL).value()
    }

    wrapContext(context: JsonGenContext) {
        let copy = context.child()
        this.attributes.forEach((v, k) => copy.define(k, v))
        return copy
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
        let objContext = this.wrapContext(context)
        let object = {}
        this.value().forEach((v, k) => {
            if (!v.isOptional(objContext) || JsonGenRandom.boolean()) {
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
        let size = this.attributes.get(JsonGenArray.ATTR_SIZE)
        size = size ? size : this.attributes.get('0')
        return size ? size : context.get(JsonGenArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    json(context: JsonGenContext): any {
        let arrayContext = this.wrapContext(context)
        return JsonGenRandom.items(this.value(), this.attrSize(arrayContext))
            .map((value, index) => {
                let itemContext = arrayContext.child()
                itemContext.define('index', new JsonGenNumber(index))
                return value.json(itemContext)
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
        let placeholderContext = this.wrapContext(context)
        let value = this.value()

        if (value instanceof JsonGenNode) {
            return value.json(placeholderContext)
        }

        if (value instanceof JsonGenRangeValue) {
            return JsonGenRandom.number(value.from, value.to)
        }

        if (value instanceof JsonGenValue) {
            let result = placeholderContext.get(value.identifier, value.args)

            if (result instanceof Array) {
                return JsonGenRandom.item(result)
            }

            if (result instanceof JsonGenNode) {
                return result.json(placeholderContext)
            }

            if (result instanceof JsonGenRangeValue) {
                return JsonGenRandom.number(result.from, result.to)
            }

            return null
        }

        return value
    }
}