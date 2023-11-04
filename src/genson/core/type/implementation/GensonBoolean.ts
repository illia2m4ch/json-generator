import {GensonNode} from "../abstract/GensonNode";

export class GensonBoolean extends GensonNode<boolean> {
    public constructor(value: boolean) {
        super(value)
    }
}