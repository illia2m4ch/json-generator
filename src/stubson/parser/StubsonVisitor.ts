import StubsonParserVisitor from "../build/StubsonParserVisitor";
import {
    ArgContext,
    ArgsContext,
    ArrContext,
    StubsonContext,
    ObjContext,
    PairContext, ParameterValueContext,
    PlaceholderContext, PlaceholderValueContext,
    SimpleValueContext, ValueContext
} from "../build/StubsonParser";
import StubsonNode from "../core/type/abstract/StubsonNode";
import {ParseTree} from "antlr4/src/antlr4/tree/ParseTree";
import StubsonRange from "../core/type/implementation/StubsonRange";
import StubsonValue from "../core/type/implementation/StubsonValue";
import StubsonType from "../core/type/abstract/StubsonType";
import StubsonArgs from "../core/args/StubsonArgs";
import StubsonNull from "../core/type/implementation/StubsonNull";
import StubsonBoolean from "../core/type/implementation/StubsonBoolean";
import StubsonNumber from "../core/type/implementation/StubsonNumber";
import StubsonString from "../core/type/implementation/StubsonString";
import {StubsonObject} from "../core/type/implementation/StubsonObject";
import StubsonArray from "../core/type/implementation/StubsonArray";
import StubsonPlaceholder from "../core/type/implementation/StubsonPlaceholder";
import StubsonNodeUtil from "../core/type/util/StubsonNodeUtil";

export default class StubsonVisitor extends StubsonParserVisitor<any> {

    override visitStubson: (ctx: StubsonContext) => StubsonNode<any> = ctx => {
        return this.visitValue(ctx.value())
    }

    override visitSimpleValue: (ctx: SimpleValueContext) => StubsonNode<any> = ctx=> {
        let parseTree: ParseTree

        if (parseTree = ctx.STRING()) {
            let value = parseTree.getText()
            return new StubsonString(value.substring(1, value.length - 1)) // remove quotes
        }

        if (parseTree = ctx.NUMBER()) {
            let value = +parseTree.getText()
            return new StubsonNumber(value)
        }

        if (parseTree = ctx.obj()) {
            return this.visitObj(parseTree as ObjContext)
        }

        if (parseTree = ctx.arr()) {
            return this.visitArr(parseTree as ArrContext)
        }

        if (parseTree = ctx.TRUE()) {
            return new StubsonBoolean(true)
        }

        if (parseTree = ctx.FALSE()) {
            return new StubsonBoolean(false)
        }

        if (parseTree = ctx.NULL()) {
            return new StubsonNull()
        }

        if (parseTree = ctx.placeholder()) {
            return this.visitPlaceholder(parseTree as PlaceholderContext)
        }

        return null
    }

    override visitObj: (ctx: ObjContext) => StubsonObject  = ctx => {
        let pairs = new Map<StubsonNode<any>, StubsonNode<any>>()

        ctx.pair_list().forEach(pair => {
            let result = this.visitPair(pair)
            pairs.set(result[0], result[1])
        })

        return new StubsonObject(pairs)
    }

    override visitPair: (ctx: PairContext) => [StubsonNode<any>, StubsonNode<any>] = ctx => {
        let parseTree: ParseTree
        let name: StubsonNode<any>
        if (parseTree = ctx.STRING()) {
            let nameValue = parseTree.getText()
            name = new StubsonString(nameValue.substring(1, nameValue.length - 1))
        } else if (parseTree = ctx.placeholder()) {
            name = this.visitPlaceholder(parseTree as PlaceholderContext)
        }

        let value = this.visitValue(ctx.value())
        return [name, value]
    }

    override visitArr: (ctx: ArrContext) => StubsonArray<StubsonNode<any>> = ctx => {
        let items: StubsonNode<any>[] = []

        ctx.value_list().forEach(value => {
            let item = this.visitValue(value)
            items.push(item)
        })

        return new StubsonArray(items)
    }

    override visitPlaceholder: (ctx: PlaceholderContext) => StubsonPlaceholder<StubsonType<any>> = ctx => {
        let items: StubsonType<any>[] = []

        ctx.placeholderValue_list().forEach(value => {
            let item = this.visitPlaceholderValue(value)
            items.push(item)
        })

        return new StubsonPlaceholder(items)
    }

    override visitPlaceholderValue: (ctx: PlaceholderValueContext) => StubsonType<any> = ctx => {
        let parseTree: ParseTree

        if (parseTree = ctx.value()) {
            return this.visitValue(parseTree as ValueContext)
        }

        if (parseTree = ctx.parameterValue()) {
            return this.visitParameterValue(parseTree as ParameterValueContext)
        }
    }

    override visitValue: (ctx: ValueContext) => StubsonNode<any> = ctx => {
        let node = this.visitSimpleValue(ctx.simpleValue())
        if (ctx.args()) {
            let args = this.visitArgs(ctx.args())
            node.args = args
        }

        let alternatives = StubsonNodeUtil.alternatives(node)
        if (alternatives && alternatives.length > 0) {
            return new StubsonPlaceholder([node as StubsonType<any>].concat(alternatives))
        }

        return node
    }

    override visitArgs: (ctx: ArgsContext) => StubsonArgs = ctx => {
        let args = new StubsonArgs()
        let index = 0
        ctx.arg_list().forEach(arg => {
            let result = this.visitArg(arg)
            let name = result[0]

            args.set(name ? name : index.toString(), result[1])
            index++
        })

        return args
    }

    override visitArg: (ctx: ArgContext) => [string, StubsonType<any>] = ctx => {
        let identifier = ctx.IDENTIFIER()

        let name = identifier ? identifier.getText() : null
        let value = this.visitParameterValue(ctx.parameterValue())

        return [name, value]
    }

    override visitParameterValue: (ctx: ParameterValueContext) => StubsonType<any> = ctx => {

        let type: StubsonType<any>
        let parseTree: ParseTree

        if (parseTree = ctx.simpleValue()) {
            type = this.visitSimpleValue(parseTree as SimpleValueContext)
        } else if (parseTree = ctx.RANGE_VALUE()) {
            let value = parseTree.getText()
            let index = value.indexOf('..')
            let from = +value.substring(0, index)
            let to = +value.substring(index + 2, value.length)
            type = new StubsonRange(from, to)
        } else if (parseTree = ctx.IDENTIFIER()) {
            let identifier = parseTree.getText()
            type = new StubsonValue(identifier)
        }

        let argsContext = ctx.args()
        if (argsContext) {
            type.args = this.visitArgs(argsContext)
        }

        return type
    }

}