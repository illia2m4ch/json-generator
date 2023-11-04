import {JsonGenType} from "../abstract/JsonGenType";
import {JsonGenArgs} from "../../args/JsonGenArgs";

export class JsonGenValue extends JsonGenType<[string, JsonGenArgs]> {

    readonly identifier: string
    readonly args: JsonGenArgs

    constructor(identifier: string, args?: JsonGenArgs) {
        super([identifier, args])
        this.identifier = identifier
        this.args = args ? args : new JsonGenArgs()
    }

    isPrimitive(): boolean {
        return false;
    }

}