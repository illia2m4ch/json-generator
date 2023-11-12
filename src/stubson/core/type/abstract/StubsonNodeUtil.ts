import StubsonNode from "./StubsonNode";
import StubsonArray from "../implementation/StubsonArray";

export default class StubsonNodeUtil {
    static alternatives(node: StubsonNode<any>) {
        let result = node.args.get('alt')

        if (result instanceof StubsonArray) {
            return result.value()
        }

        if (result) {
            return [result]
        }

        return null
    }
}