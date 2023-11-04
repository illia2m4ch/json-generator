import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenObject extends JsonGenNode<Map<string, JsonGenNode<any>>> {

    public constructor(value: Map<string, JsonGenNode<any>>) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }
}