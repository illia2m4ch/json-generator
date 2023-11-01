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
import {JsonGenType} from "../model/JsonGenType";

export class JsonGenVisitor extends JsonGenParserVisitor<any> {

    override visitJsonGen: (ctx: JsongenContext) => JsonGenNode<any> = (ctx: JsongenContext) => {
        return this.visitValue(ctx.value())
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
            return this.visitObj(parseTree as ObjContext)
        }

        if (parseTree = ctx.arr()) {
            return this.visitArr(parseTree as ArrContext)
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
            return this.visitPlaceholder(parseTree as PlaceholderContext)
        }

        return null
    }

    override visitObj: (ctx: ObjContext) => JsonGenObject  = ctx => {
        let pairs = new Map<string, JsonGenNode<any>>()

        ctx.pair_list().forEach(pair => {
            let result = this.visitPair(pair)
            pairs.set(result[0], result[1])
        })

        return new JsonGenObject(pairs)
    }

    override visitPair: (ctx: PairContext) => [string, JsonGenNode<any>] = ctx => {
        let name = ctx.STRING().getText()
        let value = this.visitValue(ctx.value())
        return [name.substring(1, name.length - 1), value]
    }

    override visitArr: (ctx: ArrContext) => JsonGenArray<JsonGenNode<any>> = ctx => {
        let items: JsonGenNode<any>[] = []

        ctx.value_list().forEach(value => {
            let item = this.visitValue(value)
            items.push(item)
        })

        return new JsonGenArray(items)
    }

    override visitPlaceholder: (ctx: PlaceholderContext) => JsonGenPlaceholder<JsonGenType> = ctx => {
        let items: JsonGenType[] = []

        ctx.placeholderValue_list().forEach(value => {
            let item = this.visitPlaceholderValue(value)
            items.push(item)
        })

        return new JsonGenPlaceholder(items)
    }

    override visitPlaceholderValue: (ctx: PlaceholderValueContext) => JsonGenType = ctx => {
        let parseTree: ParseTree

        if (parseTree = ctx.value()) {
            return this.visitValue(parseTree as ValueContext)
        }

        if (parseTree = ctx.parameterValue()) {
            return this.visitParameterValue(parseTree as ParameterValueContext)
        }
    }

    override visitValue: (ctx: ValueContext) => JsonGenNode<any> = ctx => {
        let node = this.visitSimpleValue(ctx.simpleValue())
        if (ctx.args()) {
            let attributes = this.visitArgs(ctx.args())
            node.setAttributes(attributes)
        }
        return node
    }

    override visitArgs: (ctx: ArgsContext) => Map<string, JsonGenType> = ctx => {
        let args = new Map<string, JsonGenType>()
        let index = 0
        ctx.arg_list().forEach(arg => {
            let result = this.visitArg(arg)
            let name = result[0]

            args.set(name ? name : index.toString(), result[1])
            index++
        })

        return args
    }

    override visitArg: (ctx: ArgContext) => [string, JsonGenType] = ctx => {
        let identifier = ctx.IDENTIFIER()

        let name = identifier ? identifier.getText() : null
        let value = this.visitParameterValue(ctx.parameterValue())

        return [name, value]
    }

    override visitParameterValue: (ctx: ParameterValueContext) => JsonGenType = ctx => {
        let parseTree: ParseTree

        if (parseTree = ctx.value()) {
            return this.visitValue(parseTree as ValueContext)
        }

        if (parseTree = ctx.RANGE_VALUE()) {
            let value = parseTree.getText()
            let index = value.indexOf('..')
            let from = +value.substring(0, index)
            let to = +value.substring(index + 2, value.length)
            return new JsonGenRangeValue(from, to)
        }

        if (parseTree = ctx.IDENTIFIER()) {
            let identifier = parseTree.getText()
            if (ctx.args()) {
                let args = this.visitArgs(ctx.args())
                return new JsonGenValue(identifier, args)
            }
            return new JsonGenValue(identifier)
        }

        return null
    }

}