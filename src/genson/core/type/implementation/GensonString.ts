import {GensonNode} from "../abstract/GensonNode";

export class GensonString extends GensonNode<string> {
    public constructor(value: string) {
        super(value)
    }
}