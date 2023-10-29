// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/JsonGenParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { JsongenContext } from "./JsonGenParser";
import { SimpleValueContext } from "./JsonGenParser";
import { ObjContext } from "./JsonGenParser";
import { PairContext } from "./JsonGenParser";
import { ArrContext } from "./JsonGenParser";
import { PlaceholderContext } from "./JsonGenParser";
import { PlaceholderValueContext } from "./JsonGenParser";
import { ValueContext } from "./JsonGenParser";
import { ArgsContext } from "./JsonGenParser";
import { ArgContext } from "./JsonGenParser";
import { ParameterValueContext } from "./JsonGenParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JsonGenParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JsonGenParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JsonGenParser.jsongen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsongen?: (ctx: JsongenContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.simpleValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleValue?: (ctx: SimpleValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.placeholder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholder?: (ctx: PlaceholderContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.placeholderValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholderValue?: (ctx: PlaceholderValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;
	/**
	 * Visit a parse tree produced by `JsonGenParser.parameterValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterValue?: (ctx: ParameterValueContext) => Result;
}

