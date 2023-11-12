import StubsonNode from "../abstract/StubsonNode";
import StubsonContext from "../../context/StubsonContext";

export default class StubsonArray<Item> extends StubsonNode<StubsonNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defArraySize'

    public constructor(value: StubsonNode<Item>[]) {
        super(value)
    }

    argSize(context: StubsonContext) {
        let size = this.args.get(StubsonArray.ATTR_SIZE)
        size = size ? size : this.args.get('0')
        return size ? size : context.get(StubsonArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    isPrimitive(): boolean {
        return false
    }

}