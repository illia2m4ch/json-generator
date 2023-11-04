import {JsonGenContext} from "../data/JsonGenContext";
import {parseTree} from "../parser/JsonGenParser";
import {JsonGenVisitor} from "../parser/JsonGenVisitor";

export class JsonGen {

    private visitor = new JsonGenVisitor()

    generate(value: string) {
        let node = this.visitor.visitJsonGen(parseTree(value))
        let json = node.json(JsonGenContext.Root)
        return JSON.stringify(json, null, 2)
    }

}