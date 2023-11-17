import StubsonType from "../abstract/StubsonType";
import StubsonPostFunction from "../../post/StubsonPostFunction";

export default class StubsonValue extends StubsonType<string> {

    readonly identifier: string
    readonly postFunction: StubsonPostFunction

    constructor(identifier: string, postFunction?: StubsonPostFunction) {
        super(identifier)
        this.identifier = identifier
        this.postFunction = postFunction
    }

    isPrimitive(): boolean {
        return false
    }

}