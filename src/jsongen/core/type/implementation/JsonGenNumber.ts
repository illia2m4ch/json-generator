import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenNumber extends JsonGenNode<number> {
    public constructor(value: number) {
        super(value)
    }
}