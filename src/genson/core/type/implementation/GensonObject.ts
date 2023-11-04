import {GensonNode} from "../abstract/GensonNode";

export class GensonObject extends GensonNode<Map<string, GensonNode<any>>> {

    public constructor(value: Map<string, GensonNode<any>>) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }
}