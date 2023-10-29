import {JsonGenRangeValue} from "./JsonGenRangeValue.ts";
import {JsonGenValue} from "./JsonGenValue.ts";
import {JsonGenRandom} from "./JsonGenRandom.ts";
import {JsonGenContext} from "../data/JsonGenContext";

export abstract class JsonGenNode<Value> {
    protected attributes: Map<string, any> = new Map<string, any>()

    setAttributes(attributes: Map<string, any>) {
        this.attributes = attributes
    }

    isOptional() {
        return this.attributes.has("optional")
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
            if (!v.isOptional() || JsonGenRandom.boolean()) {
                object[k] = v.json(context)
            }
        })
        return object
    }
}

export class JsonGenArray<Item> extends StaticJsonGenNode<JsonGenNode<Item>[]> {

    attrSize() {
        let size = this.attributes.get("size")
        return size ? size : 1
    }

    json(context: JsonGenContext): any {
        let array = JsonGenRandom.items(this.value(), this.attrSize())
            .filter(v => {
                if (!v.isOptional()) return true
                return JsonGenRandom.boolean()
            })
            .map(v => v.json(context))

        return array
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
            let values = context.dataSet(value.identifier).values(value.args)
            return JsonGenRandom.item(values)
        }

        return value
    }
}