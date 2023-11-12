// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/StubsonParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { StubsonContext } from "./StubsonParser";
import { SimpleValueContext } from "./StubsonParser";
import { ObjContext } from "./StubsonParser";
import { PairContext } from "./StubsonParser";
import { ArrContext } from "./StubsonParser";
import { PlaceholderContext } from "./StubsonParser";
import { PlaceholderValueContext } from "./StubsonParser";
import { ValueContext } from "./StubsonParser";
import { ArgsContext } from "./StubsonParser";
import { ArgContext } from "./StubsonParser";
import { ParameterValueContext } from "./StubsonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StubsonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class StubsonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `StubsonParser.stubson`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStubson?: (ctx: StubsonContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.simpleValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleValue?: (ctx: SimpleValueContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.placeholder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholder?: (ctx: PlaceholderContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.placeholderValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholderValue?: (ctx: PlaceholderValueContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;
	/**
	 * Visit a parse tree produced by `StubsonParser.parameterValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterValue?: (ctx: ParameterValueContext) => Result;
}

