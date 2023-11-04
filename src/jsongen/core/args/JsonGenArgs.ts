import {JsonGenValue} from "../type/implementation/JsonGenValue";
import {JsonGenType} from "../type/abstract/JsonGenType";

export class JsonGenArgs {

    private args: Map<string, JsonGenType<any>> = new Map<string, JsonGenType<any>>()

    set(name: string, value: JsonGenType<any>) {
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
            if (value instanceof JsonGenValue && value.identifier === name) {
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