import StubsonType from "../abstract/StubsonType";

export default class StubsonValue extends StubsonType<string> {

    readonly identifier: string

    constructor(identifier: string) {
        super(identifier)
        this.identifier = identifier
    }

    isPrimitive(): boolean {
        return false
    }

}