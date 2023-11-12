import StubsonNode from "../abstract/StubsonNode";

export default class StubsonString extends StubsonNode<string> {
    public constructor(value: string) {
        super(value)
    }
}