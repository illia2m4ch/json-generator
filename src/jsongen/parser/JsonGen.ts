import {JsonGenContext} from "../core/context/JsonGenContext";
import {parseTree} from "./JsonGenParserHelper";
import {JsonGenVisitor} from "./JsonGenVisitor";
import {DefaultJsonGenConfig} from "../base/config/DefaultJsonGenConfig";

export class JsonGen {

    private config = new DefaultJsonGenConfig()
    private visitor = new JsonGenVisitor()
    private context = JsonGenContext.create(this.config)

    generate(value: string) {
        let node = this.visitor.visitJsonGen(parseTree(value))
        let json = this.context.resolve(node)
        return JSON.stringify(json, null, 2)
    }

}