// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/JsonGenParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { JsonGenContext } from "./JsonGenParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `JsonGenParser`.
 */
export default class JsonGenParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JsonGenParser.jsonGen`.
	 * @param ctx the parse tree
	 */
	enterJsonGen?: (ctx: JsonGenContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.jsonGen`.
	 * @param ctx the parse tree
	 */
	exitJsonGen?: (ctx: JsonGenContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.simpleValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleValue?: (ctx: SimpleValueContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.placeholder`.
	 * @param ctx the parse tree
	 */
	enterPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.placeholder`.
	 * @param ctx the parse tree
	 */
	exitPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	enterPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.placeholderValue`.
	 * @param ctx the parse tree
	 */
	exitPlaceholderValue?: (ctx: PlaceholderValueContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
	/**
	 * Enter a parse tree produced by `JsonGenParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	enterParameterValue?: (ctx: ParameterValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonGenParser.parameterValue`.
	 * @param ctx the parse tree
	 */
	exitParameterValue?: (ctx: ParameterValueContext) => void;
}

