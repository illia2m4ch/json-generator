import GensonParserVisitor from "../build/GensonParserVisitor";
import {
    ArgContext,
    ArgsContext,
    ArrContext,
    GensonContext,
    ObjContext,
    PairContext, ParameterValueContext,
    PlaceholderContext, PlaceholderValueContext,
    SimpleValueContext, ValueContext
} from "../build/GensonParser";
import {
    GensonNode
} from "../core/type/abstract/GensonNode";
import {ParseTree} from "antlr4/src/antlr4/tree/ParseTree";
import {GensonRange} from "../core/type/implementation/GensonRange";
import {GensonValue} from "../core/type/implementation/GensonValue";
import {GensonType} from "../core/type/abstract/GensonType";
import {GensonArgs} from "../core/args/GensonArgs";
import {
    GensonNull
} from "../core/type/implementation/GensonNull";
import {GensonBoolean} from "../core/type/implementation/GensonBoolean";
import {GensonNumber} from "../core/type/implementation/GensonNumber";
import {GensonString} from "../core/type/implementation/GensonString";
import {GensonObject} from "../core/type/implementation/GensonObject";
import {GensonArray} from "../core/type/implementation/GensonArray";
import {GensonPlaceholder} from "../core/type/implementation/GensonPlaceholder";
import GensonNodeUtil from "../core/type/abstract/GensonNodeUtil";

export class GensonVisitor extends GensonParserVisitor<any> {

    override visitGenson: (ctx: GensonContext) => GensonNode<any> = ctx => {
        return this.visitValue(ctx.value())
    }

    override visitSimpleValue: (ctx: SimpleValueContext) => GensonNode<any> = ctx=> {
        let parseTree: ParseTree

        if (parseTree = ctx.STRING()) {
            let value = parseTree.getText()
            return new GensonString(value.substring(1, value.length - 1)) // remove quotes
        }

        if (parseTree = ctx.NUMBER()) {
            let value = +parseTree.getText()
            return new GensonNumber(value)
        }

        if (parseTree = ctx.obj()) {
            return this.visitObj(parseTree as ObjContext)
        }

        if (parseTree = ctx.arr()) {
            return this.visitArr(parseTree as ArrContext)
        }

        if (parseTree = ctx.TRUE()) {
            return new GensonBoolean(true)
        }

        if (parseTree = ctx.FALSE()) {
            return new GensonBoolean(false)
        }

        if (parseTree = ctx.NULL()) {
            return new GensonNull()
        }

        if (parseTree = ctx.placeholder()) {
            return this.visitPlaceholder(parseTree as PlaceholderContext)
        }

        return null
    }

    override visitObj: (ctx: ObjContext) => GensonObject  = ctx => {
        let pairs = new Map<GensonNode<any>, GensonNode<any>>()

        ctx.pair_list().forEach(pair => {
            let result = this.visitPair(pair)
            pairs.set(result[0], result[1])
        })

        return new GensonObject(pairs)
    }

    override visitPair: (ctx: PairContext) => [GensonNode<any>, GensonNode<any>] = ctx => {
        let parseTree: ParseTree
        let name: GensonNode<any>
        if (parseTree = ctx.STRING()) {
            let nameValue = parseTree.getText()
            name = new GensonString(nameValue.substring(1, nameValue.length - 1))
        } else if (parseTree = ctx.placeholder()) {
            name = this.visitPlaceholder(parseTree as PlaceholderContext)
        }

        let value = this.visitValue(ctx.value())
        return [name, value]
    }

    override visitArr: (ctx: ArrContext) => GensonArray<GensonNode<any>> = ctx => {
        let items: GensonNode<any>[] = []

        ctx.value_list().forEach(value => {
            let item = this.visitValue(value)
            items.push(item)
        })

        return new GensonArray(items)
    }

    override visitPlaceholder: (ctx: PlaceholderContext) => GensonPlaceholder<GensonType<any>> = ctx => {
        let items: GensonType<any>[] = []

        ctx.placeholderValue_list().forEach(value => {
            let item = this.visitPlaceholderValue(value)
            items.push(item)
        })

        return new GensonPlaceholder(items)
    }

    override visitPlaceholderValue: (ctx: PlaceholderValueContext) => GensonType<any> = ctx => {
        let parseTree: ParseTree

        if (parseTree = ctx.value()) {
            return this.visitValue(parseTree as ValueContext)
        }

        if (parseTree = ctx.parameterValue()) {
            return this.visitParameterValue(parseTree as ParameterValueContext)
        }
    }

    override visitValue: (ctx: ValueContext) => GensonNode<any> = ctx => {
        let node = this.visitSimpleValue(ctx.simpleValue())
        if (ctx.args()) {
            let args = this.visitArgs(ctx.args())
            node.args = args
        }

        let alternatives = GensonNodeUtil.alternatives(node)
        if (alternatives && alternatives.length > 0) {
            return new GensonPlaceholder([node as GensonType<any>].concat(alternatives))
        }

        return node
    }

    override visitArgs: (ctx: ArgsContext) => GensonArgs = ctx => {
        let args = new GensonArgs()
        let index = 0
        ctx.arg_list().forEach(arg => {
            let result = this.visitArg(arg)
            let name = result[0]

            args.set(name ? name : index.toString(), result[1])
            index++
        })

        return args
    }

    override visitArg: (ctx: ArgContext) => [string, GensonType<any>] = ctx => {
        let identifier = ctx.IDENTIFIER()

        let name = identifier ? identifier.getText() : null
        let value = this.visitParameterValue(ctx.parameterValue())

        return [name, value]
    }

    override visitParameterValue: (ctx: ParameterValueContext) => GensonType<any> = ctx => {

        let type: GensonType<any>
        let parseTree: ParseTree

        if (parseTree = ctx.simpleValue()) {
            type = this.visitSimpleValue(parseTree as SimpleValueContext)
        } else if (parseTree = ctx.RANGE_VALUE()) {
            let value = parseTree.getText()
            let index = value.indexOf('..')
            let from = +value.substring(0, index)
            let to = +value.substring(index + 2, value.length)
            type = new GensonRange(from, to)
        } else if (parseTree = ctx.IDENTIFIER()) {
            let identifier = parseTree.getText()
            type = new GensonValue(identifier)
        }

        let argsContext = ctx.args()
        if (argsContext) {
            type.args = this.visitArgs(argsContext)
        }

        return type
    }

}