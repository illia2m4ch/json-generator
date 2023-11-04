import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenString extends JsonGenNode<string> {
    public constructor(value: string) {
        super(value)
    }
}