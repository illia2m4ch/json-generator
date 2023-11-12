import StubsonNode from "../abstract/StubsonNode";

export default class StubsonBoolean extends StubsonNode<boolean> {
    public constructor(value: boolean) {
        super(value)
    }
}