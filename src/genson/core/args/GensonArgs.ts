import {GensonValue} from "../type/implementation/GensonValue";
import {GensonType} from "../type/abstract/GensonType";

export class GensonArgs {

    private args: Map<string, GensonType<any>> = new Map<string, GensonType<any>>()

    set(name: string, value: GensonType<any>) {
        this.args.set(name, value)
    }

    get(name: string) {
        return this.args.get(name)
    }

    forEach(callback: (value: any, key: string) => void) {
        this.args.forEach(callback)
    }

    hasMarker(name: string) {
        let hasMarker = false
        this.args.forEach(value => {
            if (value instanceof GensonValue && value.identifier === name) {
                hasMarker = true
            }
        })
        if (hasMarker) {
            return true
        }
    }

    isEmpty() {
        return this.args.size === 0
    }

}