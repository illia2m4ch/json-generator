import {JsonGenType} from "../abstract/JsonGenType";
import {JsonGenContext} from "../../context/JsonGenContext";

export class JsonGenRange extends JsonGenType<[number, number]> {

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super([from, to])
        this.from = from
        this.to = to
    }

    isPrimitive(): boolean {
        return false;
    }

}