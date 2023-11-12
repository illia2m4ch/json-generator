import StubsonType from "../abstract/StubsonType";
import StubsonNumber from "./StubsonNumber";

export default class StubsonRange extends StubsonType<[number, number]> {

    private static ATTR_STEP = 'step'

    readonly from: number
    readonly to: number

    constructor(from: number, to: number) {
        super([from, to])
        this.from = from
        this.to = to
    }

    argStep() {
        let size: any = this.args.get(StubsonRange.ATTR_STEP)
        size = size ? size : this.args.get('0')
        return size instanceof StubsonNumber ? size.value() : 1
    }

    isPrimitive(): boolean {
        return false
    }

}