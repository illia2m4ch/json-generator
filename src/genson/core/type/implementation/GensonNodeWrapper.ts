import {GensonNode} from "../abstract/GensonNode";

export class GensonNodeWrapper<Value> extends GensonNode<Value> {
    public constructor(value: Value) {
        super(value)
    }
}