import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenWrapper<Value> extends JsonGenNode<Value> {
    public constructor(value: Value) {
        super(value);
    }
}