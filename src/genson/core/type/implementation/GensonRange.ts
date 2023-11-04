import {GensonType} from "../abstract/GensonType";
import {GensonContext} from "../../context/GensonContext";

export class GensonRange extends GensonType<[number, number]> {

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super([from, to])
        this.from = from
        this.to = to
    }

    isPrimitive(): boolean {
        return false
    }

}