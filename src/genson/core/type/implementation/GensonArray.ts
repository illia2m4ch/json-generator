import {GensonNode} from "../abstract/GensonNode";
import {GensonContext} from "../../context/GensonContext";

export class GensonArray<Item> extends GensonNode<GensonNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defArraySize'

    public constructor(value: GensonNode<Item>[]) {
        super(value)
    }

    attrSize(context: GensonContext) {
        let size = this.args.get(GensonArray.ATTR_SIZE)
        size = size ? size : this.args.get('0')
        return size ? size : context.get(GensonArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    isPrimitive(): boolean {
        return false
    }

}