import StubsonNode from "../abstract/StubsonNode";

export default class StubsonNodeWrapper<Value> extends StubsonNode<Value> {
    public constructor(value: Value) {
        super(value)
    }
}