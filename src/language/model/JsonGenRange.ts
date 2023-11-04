import {JsonGenType} from "./JsonGenType";
import {JsonGenContext} from "../data/JsonGenContext";

export class JsonGenRange extends JsonGenType {

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super()
        this.from = from
        this.to = to
    }

    json(context: JsonGenContext) {
        return context.resolver().resolveNumber(this.from, this.to)
    }

    isStatic(): boolean {
        return false;
    }

}