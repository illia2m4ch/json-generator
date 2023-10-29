import JsonGenParserVisitor from "../core/JsonGenParserVisitor";
import {
    ArgContext,
    ArgsContext,
    ArrContext,
    JsongenContext,
    ObjContext,
    PairContext, ParameterValueContext,
    PlaceholderContext, PlaceholderValueContext,
    SimpleValueContext, ValueContext
} from "../core/JsonGenParser";

class JsonGenVisitor extends JsonGenParserVisitor<any> {

    /**
     * Visit a parse tree produced by `JsonGenParser.jsongen`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitJsongen: (ctx: JsongenContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.simpleValue`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitSimpleValue: (ctx: SimpleValueContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.obj`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitObj: (ctx: ObjContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.pair`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitPair: (ctx: PairContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.arr`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitArr: (ctx: ArrContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.placeholder`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitPlaceholder: (ctx: PlaceholderContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.placeholderValue`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitPlaceholderValue: (ctx: PlaceholderValueContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.value`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitValue: (ctx: ValueContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.args`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitArgs: (ctx: ArgsContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.arg`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitArg: (ctx: ArgContext) => any;
    /**
     * Visit a parse tree produced by `JsonGenParser.parameterValue`.
     * @param ctx the parse tree
     * @return the visitor any
     */
    visitParameterValue: (ctx: ParameterValueContext) => any;
}