import StubsonContext from "../core/context/StubsonContext";
import {parseTree} from "./StubsonParserHelper";
import StubsonVisitor from "./StubsonVisitor";
import DefaultStubsonConfig from "../base/config/DefaultStubsonConfig";

export default class Stubson {

    private config = new DefaultStubsonConfig()
    private visitor = new StubsonVisitor()
    private context = StubsonContext.create(this.config)

    generate(value: string) {
        try {
            let node = this.visitor.visitStubson(parseTree(value))
            let json = this.context.resolve(node)
            return JSON.stringify(json, null, 2)
        } catch (e) {
            return ""
        }
    }

}