import StubsonPostFunction from "../../core/post/StubsonPostFunction";

import StubsonPostState from "../../core/post/StubsonPostState";

export default class IndexStubsonPostFunction extends StubsonPostFunction {
    execute(state: StubsonPostState): any {
        let prev = state
        let parent = state.parent

        while (parent) {
            if (parent.element instanceof Array) {
                return +prev.key
            }
            prev = parent
            parent = parent.parent
        }

        return null
    }
}