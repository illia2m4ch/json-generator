import StubsonString from "../../core/type/implementation/StubsonString";
import StubsonPostFunction from "../../core/post/StubsonPostFunction";
import StubsonValue from "../../core/type/implementation/StubsonValue";
import StubsonPostState from "../../core/post/StubsonPostState";

export default class ReferenceStubsonPostFunction extends StubsonPostFunction {
    execute(state: StubsonPostState): any {
        let value = state.element as StubsonValue

        let path = this._resolvePath(value)

        if (!path) {
            return null
        }

        let target = state.parent
        let element = target.element

        for (let part of path.split('/')) {
            if (part === '.') {
                while (target.parent != null) {
                    target = target.parent
                    element = target.element
                }
            } else if (part === '..') {
                target = target.parent
                element = target.element
            } else {
                element = element[part]
            }
        }
        return element
    }

    private _resolvePath(value: StubsonValue) {
        let path = value.args.get('0')
        if (path instanceof StubsonString) {
            return path.value()
        }
        return null
    }

}