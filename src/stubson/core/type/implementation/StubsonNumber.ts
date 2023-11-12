import StubsonNode from "../abstract/StubsonNode";

export default class StubsonNumber extends StubsonNode<number> {
    public constructor(value: number) {
        super(value)
    }
}