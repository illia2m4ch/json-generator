import {GensonType} from "../abstract/GensonType";
import {GensonArgs} from "../../args/GensonArgs";

export class GensonValue extends GensonType<string> {

    readonly identifier: string

    constructor(identifier: string) {
        super(identifier)
        this.identifier = identifier
    }

    isPrimitive(): boolean {
        return false
    }

}