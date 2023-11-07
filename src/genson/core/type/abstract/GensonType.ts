import {GensonArgs} from "../../args/GensonArgs";

export abstract class GensonType<Value> {

    private readonly _value: Value
    public args: GensonArgs = new GensonArgs()

    protected constructor(value: Value) {
        this._value = value
    }

    value() {
        return this._value
    }

    isPrimitive(): boolean {
        return true
    }

}