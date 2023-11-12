import StubsonNode from "../abstract/StubsonNode";

export class StubsonObject extends StubsonNode<Map<StubsonNode<any>, StubsonNode<any>>> {

    public constructor(value: Map<StubsonNode<any>, StubsonNode<any>>) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }
}