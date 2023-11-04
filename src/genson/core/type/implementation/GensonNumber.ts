import {GensonNode} from "../abstract/GensonNode";

export class GensonNumber extends GensonNode<number> {
    public constructor(value: number) {
        super(value)
    }
}