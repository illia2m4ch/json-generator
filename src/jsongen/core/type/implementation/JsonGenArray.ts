import {JsonGenNode} from "../abstract/JsonGenNode";
import {JsonGenContext} from "../../context/JsonGenContext";
import {JsonGenNumber} from "./JsonGenNumber";

export class JsonGenArray<Item> extends JsonGenNode<JsonGenNode<Item>[]> {

    private static ATTR_SIZE = 'size'
    private static VAL_DEFAULT_ARRAY_SIZE = 'defArraySize'

    public constructor(value: JsonGenNode<Item>[]) {
        super(value)
    }

    attrSize(context: JsonGenContext) {
        let size = this.args.get(JsonGenArray.ATTR_SIZE)
        size = size ? size : this.args.get('0')
        return size ? size : context.get(JsonGenArray.VAL_DEFAULT_ARRAY_SIZE)
    }

    isPrimitive(): boolean {
        return false
    }

}