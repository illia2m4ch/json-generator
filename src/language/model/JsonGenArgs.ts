import {JsonGenValue} from "./JsonGenValue";
import {JsonGenNode} from "./JsonGenNode";

export class JsonGenArgs {

    private args: Map<string, any> = new Map<string, any>()

    set(name: string, value: any) {
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