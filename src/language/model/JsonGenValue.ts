import {JsonGenType} from "./JsonGenType";
import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenArgs} from "./JsonGenArgs";

export class JsonGenValue extends JsonGenType {

    readonly identifier: string
    readonly args: JsonGenArgs

    constructor(identifier: string, args?: JsonGenArgs) {
        super()
        this.identifier = identifier
        this.args = args ? args : new JsonGenArgs()
    }

    json(context: JsonGenContext): any {
        return context.get(this.identifier, this.args)?.json(context)
    }

    isStatic(): boolean {
        return false;
    }

}