// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/GensonParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { GensonContext } from "./GensonParser";
import { SimpleValueContext } from "./GensonParser";
import { ObjContext } from "./GensonParser";
import { PairContext } from "./GensonParser";
import { ArrContext } from "./GensonParser";
import { PlaceholderContext } from "./GensonParser";
import { PlaceholderValueContext } from "./GensonParser";
import { ValueContext } from "./GensonParser";
import { ArgsContext } from "./GensonParser";
import { ArgContext } from "./GensonParser";
import { ParameterValueContext } from "./GensonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GensonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GensonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GensonParser.genson`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenson?: (ctx: GensonContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.simpleValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleValue?: (ctx: SimpleValueContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.placeholder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholder?: (ctx: PlaceholderContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.placeholderValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholderValue?: (ctx: PlaceholderValueContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;
	/**
	 * Visit a parse tree produced by `GensonParser.parameterValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterValue?: (ctx: ParameterValueContext) => Result;
}

