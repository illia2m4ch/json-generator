// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/StubsonParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `StubsonParser`.
 */
export default class StubsonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StubsonParser.stubson`.
	 * @param ctx the parse tree
	 */
	enterStubson?: (ctx: StubsonContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.stubson`.
	 * @param ctx the parse tree
	 */
	exitStubson?: (ctx: StubsonContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.placeholder`.
	 * @param ctx the parse tree
	 */
	enterPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.placeholder`.
	 * @param ctx the parse tree
	 */
	exitPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	enterPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	exitPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
	/**
	 * Enter a parse tree produced by `StubsonParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	enterParameterValue?: (ctx: ParameterValueContext) => void;
	/**
	 * Exit a parse tree produced by `StubsonParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	exitParameterValue?: (ctx: ParameterValueContext) => void;
}

