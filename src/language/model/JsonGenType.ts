import {JsonGenContext} from "../data/JsonGenContext";

export abstract class JsonGenType<Value> {

    private readonly _value: Value

    protected constructor(value: Value) {
        this._value = value
    }

    value() {
        return this._value
    }

    json(context: JsonGenContext): any {
        return this.value()
    }

    isStatic(): boolean {
        return true;
    }

}