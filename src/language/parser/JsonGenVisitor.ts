import JsonGenParserVisitor from "../core/JsonGenParserVisitor.ts";
import {
    ArgContext,
    ArgsContext,
    ArrContext,
    JsongenContext,
    ObjContext,
    PairContext, ParameterValueContext,
    PlaceholderContext, PlaceholderValueContext,
    SimpleValueContext, ValueContext
} from "../core/JsonGenParser.ts";
import {
    JsonGenArray,
    JsonGenBoolean,
    JsonGenNode,
    JsonGenNull,
    JsonGenNumber, JsonGenObject,
    JsonGenPlaceholder,
    JsonGenString
} from "../model/JsonGenNode.ts";
import {ParseTree} from "antlr4/src/antlr4/tree/ParseTree.ts";
import {JsonGenRangeValue} from "../model/JsonGenRangeValue.ts";
import {JsonGenValue} from "../model/JsonGenValue.ts";

export class JsonGenVisitor extends JsonGenParserVisitor<any> {

    override visitJsongen: (ctx: JsongenContext) => JsonGenNode<any> = (ctx: JsongenContext) => {
        return this.visit(ctx.value())
    }

    override visitSimpleValue: (ctx: SimpleValueContext) => JsonGenNode<any> = ctx=> {
        let parseTree: ParseTree

        if (parseTree = ctx.STRING()) {
            let value = parseTree.getText()
            return new JsonGenString(value.substring(1, value.length - 1)) // remove quotes
        }

        if (parseTree = ctx.NUMBER()) {
            let value = +parseTree.getText()
            return new JsonGenNumber(value)
        }

        if (parseTree = ctx.obj()) {
            return this.visit(parseTree)
        }

        if (parseTree = ctx.arr()) {
            return this.visit(parseTree)
        }

        if (parseTree = ctx.TRUE()) {
            return new JsonGenBoolean(true)
        }

        if (parseTree = ctx.FALSE()) {
            return new JsonGenBoolean(false)
        }

        if (parseTree = ctx.NULL()) {
            return new JsonGenNull()
        }

        if (parseTree = ctx.placeholder()) {
            return this.visit(parseTree)
        }

        return null
    }

    override visitObj: (ctx: ObjContext) => JsonGenObject  = ctx => {
        let pairs = new Map<string, JsonGenNode<any>>()

        ctx.pair_list().forEach(pair => {
            let result = this.visit(pair)
            pairs.set(result[0], result[1])
        })

        return new JsonGenObject(pairs)
    }

    override visitPair = (ctx: PairContext) => {
        let name = ctx.STRING().getText()
        let value = this.visit(ctx.value())
        return [name.substring(1, name.length - 1), value]
    }

    override visitArr: (ctx: ArrContext) => JsonGenArray<any> = ctx => {
        let items = []

        ctx.value_list().forEach(value => {
            let item = this.visit(value)
            items.push(item)
        })

        return new JsonGenArray(items)
    }

    override visitPlaceholder = (ctx: PlaceholderContext) => {
        let items = []

        ctx.placeholderValue_list().forEach(value => {
            let item = this.visit(value)
            items.push(item)
        })

        return new JsonGenPlaceholder(items)
    }

    override visitPlaceholderValue = (ctx: PlaceholderValueContext) => {
        let parseTree: ParseTree

        if (parseTree = ctx.value()) {
            return this.visit(parseTree)
        }

        if (parseTree = ctx.parameterValue()) {
            return this.visit(parseTree)
        }
    }

    override visitValue = (ctx: ValueContext) => {
        let node = this.visit(ctx.simpleValue())
        if (ctx.args()) {
            let attributes = this.visit(ctx.args())
            node.setAttributes(attributes)
        }
        return node
    }

    override visitArgs = (ctx: ArgsContext) => {
        let args = new Map<String, any>()

        ctx.arg_list().forEach(arg => {
            let result = this.visit(arg)
            args.set(result[0], result[1])
        })

        return args
    }

    override visitArg = (ctx: ArgContext) => {
        let name = ctx.IDENTIFIER().getText()

        if (!ctx.parameterValue()) {
            return [name, null]
        }

        let value = this.visit(ctx.parameterValue())

        return [name, value]
    }

    override visitParameterValue = (ctx: ParameterValueContext) => {
        let parseTree: ParseTree

        if (parseTree = ctx.simpleValue()) {
            return this.visit(parseTree)
        }

        if (parseTree = ctx.RANGE_VALUE()) {
            let value = parseTree.getText()
            let index = value.indexOf('..')
            let from = +value.substring(0, index)
            let to = +value.substring(index + 1, value.length)
            return new JsonGenRangeValue(from, to)
        }

        if (parseTree = ctx.IDENTIFIER()) {
            let identifier = parseTree.getText()
            let args = this.visit(ctx.args())
            return new JsonGenValue(identifier, args)
        }

        return null
    }

}