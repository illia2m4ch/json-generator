import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenBoolean extends JsonGenNode<boolean> {
    public constructor(value: boolean) {
        super(value)
    }
}