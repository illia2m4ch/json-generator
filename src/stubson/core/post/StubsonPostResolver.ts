import StubsonValue from "../type/implementation/StubsonValue";
import StubsonPostState from "./StubsonPostState";

export default class StubsonPostResolver {

    private static _instance: StubsonPostResolver

    public static get instance(): StubsonPostResolver {
        if (!StubsonPostResolver._instance) {
            StubsonPostResolver._instance = new StubsonPostResolver()
        }

        return StubsonPostResolver._instance
    }

    private constructor() {

    }

    resolve(json: any): any {
        return this._resolve(StubsonPostState.root(json))
    }

    private _resolve(state: StubsonPostState) {
        let current = state.element

        if (current instanceof StubsonValue) {
            return current.postFunction.execute(state)
        }

        if (current instanceof Array) {
            return current.map((value, index) => this._resolve(state.child(value, index.toString())))
        }

        if (current instanceof Object) {
            let result = {}
            Object.keys(current).forEach(key => {
                result[key] = this._resolve(state.child(current[key], key))
            })
            return result
        }

        return current
    }

}

