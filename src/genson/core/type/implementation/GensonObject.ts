import {GensonNode} from "../abstract/GensonNode";

export class GensonObject extends GensonNode<Map<GensonNode<any>, GensonNode<any>>> {

    public constructor(value: Map<GensonNode<any>, GensonNode<any>>) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }
}