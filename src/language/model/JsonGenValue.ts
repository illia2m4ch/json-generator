import {JsonGenType} from "./JsonGenType";
import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenRandom} from "./JsonGenRandom";

export class JsonGenValue extends JsonGenType {

    readonly identifier: string
    readonly args: Map<string, any>

    constructor(identifier: string, args?: Map<string, any>) {
        super()
        this.identifier = identifier
        this.args = args ? args : new Map<string, any>()
    }

    json(context: JsonGenContext): any {
        let result = context.get(this.identifier, this.args)

        if (result instanceof Array) {
            return JsonGenRandom.item(result)
        }

        if (result instanceof JsonGenType) {
            return result.json(context)
        }

        return null
    }

}