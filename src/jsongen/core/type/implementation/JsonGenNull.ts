import {JsonGenNode} from "../abstract/JsonGenNode";

export class JsonGenNull extends JsonGenNode<null> {
    constructor() {
        super(null);
    }
}