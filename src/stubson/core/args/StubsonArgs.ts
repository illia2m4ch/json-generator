import StubsonValue from "../type/implementation/StubsonValue";
import StubsonType from "../type/abstract/StubsonType";

export default class StubsonArgs {

    private args: Map<string, StubsonType<any>> = new Map<string, StubsonType<any>>()

    set(name: string, value: StubsonType<any>) {
        this.args.set(name, value)
    }

    get(name: string) {
        return this.args.get(name)
    }

    forEach(callback: (value: any, key: string) => void) {
        this.args.forEach(callback)
    }

    // hasMarker(name: string) {
    //     let hasMarker = false
    //     this.args.forEach(value => {
    //         if (value instanceof StubsonValue && value.identifier === name) {
    //             hasMarker = true
    //         }
    //     })
    //     if (hasMarker) {
    //         return true
    //     }
    // }

    isEmpty() {
        return this.args.size === 0
    }

}