import StubsonNode from "../abstract/StubsonNode";

export default class StubsonNull extends StubsonNode<null> {
    constructor() {
        super(null)
    }
}