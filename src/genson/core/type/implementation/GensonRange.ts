import {GensonType} from "../abstract/GensonType";
import {GensonContext} from "../../context/GensonContext";
import {GensonNumber} from "./GensonNumber";

export class GensonRange extends GensonType<[number, number]> {

    private static ATTR_STEP = 'step'

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super([from, to])
        this.from = from
        this.to = to
    }

    argStep() {
        let size: any = this.args.get(GensonRange.ATTR_STEP)
        size = size ? size : this.args.get('0')
        return size instanceof GensonNumber ? size.value() : 1
    }

    isPrimitive(): boolean {
        return false
    }

}