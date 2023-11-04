import {GensonContext} from "../core/context/GensonContext";
import {parseTree} from "./GensonParserHelper";
import {GensonVisitor} from "./GensonVisitor";
import {DefaultGensonConfig} from "../base/config/DefaultGensonConfig";

export class Genson {

    private config = new DefaultGensonConfig()
    private visitor = new GensonVisitor()
    private context = GensonContext.create(this.config)

    generate(value: string) {
        let node = this.visitor.visitGenson(parseTree(value))
        let json = this.context.resolve(node)
        return JSON.stringify(json, null, 2)
    }

}