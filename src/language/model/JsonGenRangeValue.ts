import {JsonGenType} from "./JsonGenType";
import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenRandom} from "./JsonGenRandom";

export class JsonGenRangeValue extends JsonGenType {

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super()
        this.from = from
        this.to = to
    }

    json(context: JsonGenContext): number {
        return JsonGenRandom.number(this.from, this.to)
    }

}