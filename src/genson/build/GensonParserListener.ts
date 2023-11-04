// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/GensonParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `GensonParser`.
 */
export default class GensonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GensonParser.genson`.
	 * @param ctx the parse tree
	 */
	enterGenson?: (ctx: GensonContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.genson`.
	 * @param ctx the parse tree
	 */
	exitGenson?: (ctx: GensonContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.placeholder`.
	 * @param ctx the parse tree
	 */
	enterPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.placeholder`.
	 * @param ctx the parse tree
	 */
	exitPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	enterPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	exitPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
	/**
	 * Enter a parse tree produced by `GensonParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	enterParameterValue?: (ctx: ParameterValueContext) => void;
	/**
	 * Exit a parse tree produced by `GensonParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	exitParameterValue?: (ctx: ParameterValueContext) => void;
}

