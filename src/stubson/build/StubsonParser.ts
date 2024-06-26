// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/StubsonParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import StubsonParserListener from "./StubsonParserListener.js";
import StubsonParserVisitor from "./StubsonParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class StubsonParser extends Parser {
	public static readonly RANGE_VALUE = 1;
	public static readonly STRING = 2;
	public static readonly NUMBER = 3;
	public static readonly NULL = 4;
	public static readonly TRUE = 5;
	public static readonly FALSE = 6;
	public static readonly IDENTIFIER = 7;
	public static readonly ASSIGNMENT = 8;
	public static readonly COMMA = 9;
	public static readonly COLON = 10;
	public static readonly LPAREN = 11;
	public static readonly RPAREN = 12;
	public static readonly LSQUARE = 13;
	public static readonly RSQUARE = 14;
	public static readonly LCURL = 15;
	public static readonly RCURL = 16;
	public static readonly LPLACEHOLDER = 17;
	public static readonly RPLACEHOLDER = 18;
	public static readonly WS = 19;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_stubson = 0;
	public static readonly RULE_simpleValue = 1;
	public static readonly RULE_obj = 2;
	public static readonly RULE_pair = 3;
	public static readonly RULE_arr = 4;
	public static readonly RULE_placeholder = 5;
	public static readonly RULE_placeholderValue = 6;
	public static readonly RULE_value = 7;
	public static readonly RULE_args = 8;
	public static readonly RULE_arg = 9;
	public static readonly RULE_parameterValue = 10;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'null'", "'true'", 
                                                            "'false'", null, 
                                                            "'='", "','", 
                                                            "':'", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'<'", 
                                                            "'>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "RANGE_VALUE", 
                                                             "STRING", "NUMBER", 
                                                             "NULL", "TRUE", 
                                                             "FALSE", "IDENTIFIER", 
                                                             "ASSIGNMENT", 
                                                             "COMMA", "COLON", 
                                                             "LPAREN", "RPAREN", 
                                                             "LSQUARE", 
                                                             "RSQUARE", 
                                                             "LCURL", "RCURL", 
                                                             "LPLACEHOLDER", 
                                                             "RPLACEHOLDER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stubson", "simpleValue", "obj", "pair", "arr", "placeholder", "placeholderValue", 
		"value", "args", "arg", "parameterValue",
	];
	public get grammarFileName(): string { return "StubsonParser.g4"; }
	public get literalNames(): (string | null)[] { return StubsonParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return StubsonParser.symbolicNames; }
	public get ruleNames(): string[] { return StubsonParser.ruleNames; }
	public get serializedATN(): number[] { return StubsonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, StubsonParser._ATN, StubsonParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public stubson(): StubsonContext {
		let localctx: StubsonContext = new StubsonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, StubsonParser.RULE_stubson);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.value();
			this.state = 23;
			this.match(StubsonParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleValue(): SimpleValueContext {
		let localctx: SimpleValueContext = new SimpleValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, StubsonParser.RULE_simpleValue);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 25;
				this.match(StubsonParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 26;
				this.match(StubsonParser.NUMBER);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 27;
				this.obj();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 28;
				this.arr();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 29;
				this.match(StubsonParser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 30;
				this.match(StubsonParser.FALSE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 31;
				this.match(StubsonParser.NULL);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 32;
				this.placeholder();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let localctx: ObjContext = new ObjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, StubsonParser.RULE_obj);
		let _la: number;
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 35;
				this.match(StubsonParser.LCURL);
				this.state = 36;
				this.pair();
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 37;
					this.match(StubsonParser.COMMA);
					this.state = 38;
					this.pair();
					}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 44;
				this.match(StubsonParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 46;
				this.match(StubsonParser.LCURL);
				this.state = 47;
				this.match(StubsonParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let localctx: PairContext = new PairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, StubsonParser.RULE_pair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 50;
				this.match(StubsonParser.STRING);
				}
				break;
			case 17:
				{
				this.state = 51;
				this.placeholder();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 54;
			this.match(StubsonParser.COLON);
			this.state = 55;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arr(): ArrContext {
		let localctx: ArrContext = new ArrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, StubsonParser.RULE_arr);
		let _la: number;
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 57;
				this.match(StubsonParser.LSQUARE);
				this.state = 58;
				this.value();
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 59;
					this.match(StubsonParser.COMMA);
					this.state = 60;
					this.value();
					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 66;
				this.match(StubsonParser.RSQUARE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 68;
				this.match(StubsonParser.LSQUARE);
				this.state = 69;
				this.match(StubsonParser.RSQUARE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public placeholder(): PlaceholderContext {
		let localctx: PlaceholderContext = new PlaceholderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, StubsonParser.RULE_placeholder);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.match(StubsonParser.LPLACEHOLDER);
			this.state = 73;
			this.placeholderValue();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 74;
				this.match(StubsonParser.COMMA);
				this.state = 75;
				this.placeholderValue();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 81;
			this.match(StubsonParser.RPLACEHOLDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public placeholderValue(): PlaceholderValueContext {
		let localctx: PlaceholderValueContext = new PlaceholderValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, StubsonParser.RULE_placeholderValue);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 83;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 84;
				this.parameterValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, StubsonParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.simpleValue();
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 88;
				this.args();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, StubsonParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.match(StubsonParser.LPAREN);
			this.state = 92;
			this.arg();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 93;
				this.match(StubsonParser.COMMA);
				this.state = 94;
				this.arg();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 100;
			this.match(StubsonParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, StubsonParser.RULE_arg);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 102;
				this.match(StubsonParser.IDENTIFIER);
				this.state = 103;
				this.match(StubsonParser.ASSIGNMENT);
				this.state = 104;
				this.parameterValue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.parameterValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterValue(): ParameterValueContext {
		let localctx: ParameterValueContext = new ParameterValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, StubsonParser.RULE_parameterValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 13:
			case 15:
			case 17:
				{
				this.state = 108;
				this.simpleValue();
				}
				break;
			case 1:
				{
				this.state = 109;
				this.match(StubsonParser.RANGE_VALUE);
				}
				break;
			case 7:
				{
				this.state = 110;
				this.match(StubsonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 113;
				this.args();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,19,117,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,
	1,2,1,2,5,2,40,8,2,10,2,12,2,43,9,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,
	3,3,53,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,4,
	1,4,1,4,1,4,3,4,71,8,4,1,5,1,5,1,5,1,5,5,5,77,8,5,10,5,12,5,80,9,5,1,5,
	1,5,1,6,1,6,3,6,86,8,6,1,7,1,7,3,7,90,8,7,1,8,1,8,1,8,1,8,5,8,96,8,8,10,
	8,12,8,99,9,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,107,8,9,1,10,1,10,1,10,3,10,112,
	8,10,1,10,3,10,115,8,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,0,125,
	0,22,1,0,0,0,2,33,1,0,0,0,4,48,1,0,0,0,6,52,1,0,0,0,8,70,1,0,0,0,10,72,
	1,0,0,0,12,85,1,0,0,0,14,87,1,0,0,0,16,91,1,0,0,0,18,106,1,0,0,0,20,111,
	1,0,0,0,22,23,3,14,7,0,23,24,5,0,0,1,24,1,1,0,0,0,25,34,5,2,0,0,26,34,5,
	3,0,0,27,34,3,4,2,0,28,34,3,8,4,0,29,34,5,5,0,0,30,34,5,6,0,0,31,34,5,4,
	0,0,32,34,3,10,5,0,33,25,1,0,0,0,33,26,1,0,0,0,33,27,1,0,0,0,33,28,1,0,
	0,0,33,29,1,0,0,0,33,30,1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,
	0,35,36,5,15,0,0,36,41,3,6,3,0,37,38,5,9,0,0,38,40,3,6,3,0,39,37,1,0,0,
	0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,
	44,45,5,16,0,0,45,49,1,0,0,0,46,47,5,15,0,0,47,49,5,16,0,0,48,35,1,0,0,
	0,48,46,1,0,0,0,49,5,1,0,0,0,50,53,5,2,0,0,51,53,3,10,5,0,52,50,1,0,0,0,
	52,51,1,0,0,0,53,54,1,0,0,0,54,55,5,10,0,0,55,56,3,14,7,0,56,7,1,0,0,0,
	57,58,5,13,0,0,58,63,3,14,7,0,59,60,5,9,0,0,60,62,3,14,7,0,61,59,1,0,0,
	0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,
	66,67,5,14,0,0,67,71,1,0,0,0,68,69,5,13,0,0,69,71,5,14,0,0,70,57,1,0,0,
	0,70,68,1,0,0,0,71,9,1,0,0,0,72,73,5,17,0,0,73,78,3,12,6,0,74,75,5,9,0,
	0,75,77,3,12,6,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,
	0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,18,0,0,82,11,1,0,0,0,83,86,3,14,7,
	0,84,86,3,20,10,0,85,83,1,0,0,0,85,84,1,0,0,0,86,13,1,0,0,0,87,89,3,2,1,
	0,88,90,3,16,8,0,89,88,1,0,0,0,89,90,1,0,0,0,90,15,1,0,0,0,91,92,5,11,0,
	0,92,97,3,18,9,0,93,94,5,9,0,0,94,96,3,18,9,0,95,93,1,0,0,0,96,99,1,0,0,
	0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,12,
	0,0,101,17,1,0,0,0,102,103,5,7,0,0,103,104,5,8,0,0,104,107,3,20,10,0,105,
	107,3,20,10,0,106,102,1,0,0,0,106,105,1,0,0,0,107,19,1,0,0,0,108,112,3,
	2,1,0,109,112,5,1,0,0,110,112,5,7,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,
	110,1,0,0,0,112,114,1,0,0,0,113,115,3,16,8,0,114,113,1,0,0,0,114,115,1,
	0,0,0,115,21,1,0,0,0,13,33,41,48,52,63,70,78,85,89,97,106,111,114];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StubsonParser.__ATN) {
			StubsonParser.__ATN = new ATNDeserializer().deserialize(StubsonParser._serializedATN);
		}

		return StubsonParser.__ATN;
	}


	static DecisionsToDFA = StubsonParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StubsonContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(StubsonParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_stubson;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterStubson) {
	 		listener.enterStubson(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitStubson) {
	 		listener.exitStubson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitStubson) {
			return visitor.visitStubson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleValueContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(StubsonParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(StubsonParser.NUMBER, 0);
	}
	public obj(): ObjContext {
		return this.getTypedRuleContext(ObjContext, 0) as ObjContext;
	}
	public arr(): ArrContext {
		return this.getTypedRuleContext(ArrContext, 0) as ArrContext;
	}
	public TRUE(): TerminalNode {
		return this.getToken(StubsonParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(StubsonParser.FALSE, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(StubsonParser.NULL, 0);
	}
	public placeholder(): PlaceholderContext {
		return this.getTypedRuleContext(PlaceholderContext, 0) as PlaceholderContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_simpleValue;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterSimpleValue) {
	 		listener.enterSimpleValue(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitSimpleValue) {
	 		listener.exitSimpleValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitSimpleValue) {
			return visitor.visitSimpleValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(StubsonParser.LCURL, 0);
	}
	public pair_list(): PairContext[] {
		return this.getTypedRuleContexts(PairContext) as PairContext[];
	}
	public pair(i: number): PairContext {
		return this.getTypedRuleContext(PairContext, i) as PairContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(StubsonParser.RCURL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(StubsonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(StubsonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_obj;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterObj) {
	 		listener.enterObj(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitObj) {
	 		listener.exitObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(StubsonParser.COLON, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(StubsonParser.STRING, 0);
	}
	public placeholder(): PlaceholderContext {
		return this.getTypedRuleContext(PlaceholderContext, 0) as PlaceholderContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_pair;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterPair) {
	 		listener.enterPair(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitPair) {
	 		listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQUARE(): TerminalNode {
		return this.getToken(StubsonParser.LSQUARE, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public RSQUARE(): TerminalNode {
		return this.getToken(StubsonParser.RSQUARE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(StubsonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(StubsonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_arr;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterArr) {
	 		listener.enterArr(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitArr) {
	 		listener.exitArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlaceholderContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPLACEHOLDER(): TerminalNode {
		return this.getToken(StubsonParser.LPLACEHOLDER, 0);
	}
	public placeholderValue_list(): PlaceholderValueContext[] {
		return this.getTypedRuleContexts(PlaceholderValueContext) as PlaceholderValueContext[];
	}
	public placeholderValue(i: number): PlaceholderValueContext {
		return this.getTypedRuleContext(PlaceholderValueContext, i) as PlaceholderValueContext;
	}
	public RPLACEHOLDER(): TerminalNode {
		return this.getToken(StubsonParser.RPLACEHOLDER, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(StubsonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(StubsonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_placeholder;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterPlaceholder) {
	 		listener.enterPlaceholder(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitPlaceholder) {
	 		listener.exitPlaceholder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitPlaceholder) {
			return visitor.visitPlaceholder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlaceholderValueContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public parameterValue(): ParameterValueContext {
		return this.getTypedRuleContext(ParameterValueContext, 0) as ParameterValueContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_placeholderValue;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterPlaceholderValue) {
	 		listener.enterPlaceholderValue(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitPlaceholderValue) {
	 		listener.exitPlaceholderValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitPlaceholderValue) {
			return visitor.visitPlaceholderValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleValue(): SimpleValueContext {
		return this.getTypedRuleContext(SimpleValueContext, 0) as SimpleValueContext;
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_value;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(StubsonParser.LPAREN, 0);
	}
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(StubsonParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(StubsonParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(StubsonParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_args;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterArgs) {
	 		listener.enterArgs(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitArgs) {
	 		listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(StubsonParser.IDENTIFIER, 0);
	}
	public ASSIGNMENT(): TerminalNode {
		return this.getToken(StubsonParser.ASSIGNMENT, 0);
	}
	public parameterValue(): ParameterValueContext {
		return this.getTypedRuleContext(ParameterValueContext, 0) as ParameterValueContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_arg;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterValueContext extends ParserRuleContext {
	constructor(parser?: StubsonParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleValue(): SimpleValueContext {
		return this.getTypedRuleContext(SimpleValueContext, 0) as SimpleValueContext;
	}
	public RANGE_VALUE(): TerminalNode {
		return this.getToken(StubsonParser.RANGE_VALUE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(StubsonParser.IDENTIFIER, 0);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
    public get ruleIndex(): number {
    	return StubsonParser.RULE_parameterValue;
	}
	public enterRule(listener: StubsonParserListener): void {
	    if(listener.enterParameterValue) {
	 		listener.enterParameterValue(this);
		}
	}
	public exitRule(listener: StubsonParserListener): void {
	    if(listener.exitParameterValue) {
	 		listener.exitParameterValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StubsonParserVisitor<Result>): Result {
		if (visitor.visitParameterValue) {
			return visitor.visitParameterValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
