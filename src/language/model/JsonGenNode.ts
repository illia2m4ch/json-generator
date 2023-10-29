export abstract class JsonGenNode<Value> {
    protected attributes: Map<string, any>
    setAttributes(attributes: Map<string, any>) {
        this.attributes = attributes
    }
    abstract value(): Value
    abstract json(): Value
}

export class StaticJsonGenNode<Value> extends JsonGenNode<Value> {
    
    private readonly _value: Value
    
    constructor(value: Value) {
        super()
        this._value = value
    }
    
    value(): Value {
        return this._value
    }
    
    json(): Value {
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

}

export class JsonGenArray<Item> extends StaticJsonGenNode<JsonGenNode<Item>[]> {

}

export class JsonGenPlaceholder<Item> extends JsonGenNode<Item> {

    private readonly _values: Item[]
    
    constructor(values: Item[]) {
        super()
        this._values = values
    }

    value(): Item {
        return this._values[Math.floor(Math.random() * this._values.length)];
    }

    json(): Item {
        return this.value()
    }
}