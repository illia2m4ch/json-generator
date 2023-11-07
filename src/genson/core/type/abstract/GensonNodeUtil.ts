import {GensonNode} from "./GensonNode";
import {GensonArray} from "../implementation/GensonArray";

export default class GensonNodeUtil {
    static alternatives(node: GensonNode<any>) {
        let result = node.args.get('alt')

        if (result instanceof GensonArray) {
            return result.value()
        }

        if (result) {
            return [result]
        }

        return null
    }
}