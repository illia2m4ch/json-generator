import StubsonArgs from "../../args/StubsonArgs";

export default abstract class StubsonType<Value> {

    private readonly _value: Value
    public args: StubsonArgs = new StubsonArgs()

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