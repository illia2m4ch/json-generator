import {GensonType} from "../abstract/GensonType";
import {GensonArgs} from "../../args/GensonArgs";

export class GensonValue extends GensonType<[string, GensonArgs]> {

    readonly identifier: string
    readonly args: GensonArgs

    constructor(identifier: string, args?: GensonArgs) {
        super([identifier, args])
        this.identifier = identifier
        this.args = args ? args : new GensonArgs()
    }

    isPrimitive(): boolean {
        return false
    }

}