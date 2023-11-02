import {JsonGenType} from "./JsonGenType";
import {JsonGenContext} from "../data/JsonGenContext";

export class JsonGenValue extends JsonGenType {

    readonly identifier: string
    readonly args: Map<string, any>

    constructor(identifier: string, args?: Map<string, any>) {
        super()
        this.identifier = identifier
        this.args = args ? args : new Map<string, any>()
    }

    json(context: JsonGenContext): any {
        return context.get(this.identifier, this.args)?.json(context)
    }

}