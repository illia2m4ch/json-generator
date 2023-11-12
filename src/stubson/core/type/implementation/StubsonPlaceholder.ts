import StubsonNode from "../abstract/StubsonNode";

export default class StubsonPlaceholder<Item> extends StubsonNode<Item[]> {

    public constructor(value: Item[]) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }

}