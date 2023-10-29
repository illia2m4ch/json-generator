// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/JsonGenParser.g4 by ANTLR 4.13.1
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
import JsonGenParserListener from "./JsonGenParserListener.js";
import JsonGenParserVisitor from "./JsonGenParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JsonGenParser extends Parser {
	public static readonly RANGE_VALUE = 1;
	public static readonly STRING = 2;
	public static readonly NUMBER = 3;
	public static readonly IDENTIFIER = 4;
	public static readonly ASSIGNMENT = 5;
	public static readonly COMMA = 6;
	public static readonly COLON = 7;
	public static readonly LPAREN = 8;
	public static readonly RPAREN = 9;
	public static readonly LSQUARE = 10;
	public static readonly RSQUARE = 11;
	public static readonly LCURL = 12;
	public static readonly RCURL = 13;
	public static readonly LPLACEHOLDER = 14;
	public static readonly RPLACEHOLDER = 15;
	public static readonly NULL = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly WS = 19;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_jsongen = 0;
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
                                                            null, "'='", 
                                                            "','", "':'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'<'", "'>'", 
                                                            "'null'", "'true'", 
                                                            "'false'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "RANGE_VALUE", 
                                                             "STRING", "NUMBER", 
                                                             "IDENTIFIER", 
                                                             "ASSIGNMENT", 
                                                             "COMMA", "COLON", 
                                                             "LPAREN", "RPAREN", 
                                                             "LSQUARE", 
                                                             "RSQUARE", 
                                                             "LCURL", "RCURL", 
                                                             "LPLACEHOLDER", 
                                                             "RPLACEHOLDER", 
                                                             "NULL", "TRUE", 
                                                             "FALSE", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"jsongen", "simpleValue", "obj", "pair", "arr", "placeholder", "placeholderValue", 
		"value", "args", "arg", "parameterValue",
	];
	public get grammarFileName(): string { return "JsonGenParser.g4"; }
	public get literalNames(): (string | null)[] { return JsonGenParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JsonGenParser.symbolicNames; }
	public get ruleNames(): string[] { return JsonGenParser.ruleNames; }
	public get serializedATN(): number[] { return JsonGenParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JsonGenParser._ATN, JsonGenParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public jsongen(): JsongenContext {
		let localctx: JsongenContext = new JsongenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JsonGenParser.RULE_jsongen);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.value();
			this.state = 23;
			this.match(JsonGenParser.EOF);
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
		this.enterRule(localctx, 2, JsonGenParser.RULE_simpleValue);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 25;
				this.match(JsonGenParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 26;
				this.match(JsonGenParser.NUMBER);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 27;
				this.obj();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 28;
				this.arr();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 29;
				this.match(JsonGenParser.TRUE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 30;
				this.match(JsonGenParser.FALSE);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 31;
				this.match(JsonGenParser.NULL);
				}
				break;
			case 14:
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
		this.enterRule(localctx, 4, JsonGenParser.RULE_obj);
		let _la: number;
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 35;
				this.match(JsonGenParser.LCURL);
				this.state = 36;
				this.pair();
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6) {
					{
					{
					this.state = 37;
					this.match(JsonGenParser.COMMA);
					this.state = 38;
					this.pair();
					}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 44;
				this.match(JsonGenParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 46;
				this.match(JsonGenParser.LCURL);
				this.state = 47;
				this.match(JsonGenParser.RCURL);
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
		this.enterRule(localctx, 6, JsonGenParser.RULE_pair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.match(JsonGenParser.STRING);
			this.state = 51;
			this.match(JsonGenParser.COLON);
			this.state = 52;
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
		this.enterRule(localctx, 8, JsonGenParser.RULE_arr);
		let _la: number;
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 54;
				this.match(JsonGenParser.LSQUARE);
				this.state = 55;
				this.value();
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6) {
					{
					{
					this.state = 56;
					this.match(JsonGenParser.COMMA);
					this.state = 57;
					this.value();
					}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 63;
				this.match(JsonGenParser.RSQUARE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 65;
				this.match(JsonGenParser.LSQUARE);
				this.state = 66;
				this.match(JsonGenParser.RSQUARE);
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
		this.enterRule(localctx, 10, JsonGenParser.RULE_placeholder);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(JsonGenParser.LPLACEHOLDER);
			this.state = 70;
			this.placeholderValue();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 71;
				this.match(JsonGenParser.COMMA);
				this.state = 72;
				this.placeholderValue();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(JsonGenParser.RPLACEHOLDER);
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
		this.enterRule(localctx, 12, JsonGenParser.RULE_placeholderValue);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 80;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 81;
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
		this.enterRule(localctx, 14, JsonGenParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.simpleValue();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 85;
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
		this.enterRule(localctx, 16, JsonGenParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(JsonGenParser.LPAREN);
			this.state = 89;
			this.arg();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 90;
				this.match(JsonGenParser.COMMA);
				this.state = 91;
				this.arg();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
			this.match(JsonGenParser.RPAREN);
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
		this.enterRule(localctx, 18, JsonGenParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this.match(JsonGenParser.IDENTIFIER);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 100;
				this.match(JsonGenParser.ASSIGNMENT);
				{
				this.state = 101;
				this.parameterValue();
				}
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
	public parameterValue(): ParameterValueContext {
		let localctx: ParameterValueContext = new ParameterValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JsonGenParser.RULE_parameterValue);
		let _la: number;
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 10:
			case 12:
			case 14:
			case 16:
			case 17:
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.simpleValue();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.match(JsonGenParser.RANGE_VALUE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 106;
				this.match(JsonGenParser.IDENTIFIER);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 107;
					this.args();
					}
				}

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

	public static readonly _serializedATN: number[] = [4,1,19,113,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,
	1,2,1,2,5,2,40,8,2,10,2,12,2,43,9,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,
	1,3,1,3,1,4,1,4,1,4,1,4,5,4,59,8,4,10,4,12,4,62,9,4,1,4,1,4,1,4,1,4,3,4,
	68,8,4,1,5,1,5,1,5,1,5,5,5,74,8,5,10,5,12,5,77,9,5,1,5,1,5,1,6,1,6,3,6,
	83,8,6,1,7,1,7,3,7,87,8,7,1,8,1,8,1,8,1,8,5,8,93,8,8,10,8,12,8,96,9,8,1,
	8,1,8,1,9,1,9,1,9,3,9,103,8,9,1,10,1,10,1,10,1,10,3,10,109,8,10,3,10,111,
	8,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,0,120,0,22,1,0,0,0,2,33,
	1,0,0,0,4,48,1,0,0,0,6,50,1,0,0,0,8,67,1,0,0,0,10,69,1,0,0,0,12,82,1,0,
	0,0,14,84,1,0,0,0,16,88,1,0,0,0,18,99,1,0,0,0,20,110,1,0,0,0,22,23,3,14,
	7,0,23,24,5,0,0,1,24,1,1,0,0,0,25,34,5,2,0,0,26,34,5,3,0,0,27,34,3,4,2,
	0,28,34,3,8,4,0,29,34,5,17,0,0,30,34,5,18,0,0,31,34,5,16,0,0,32,34,3,10,
	5,0,33,25,1,0,0,0,33,26,1,0,0,0,33,27,1,0,0,0,33,28,1,0,0,0,33,29,1,0,0,
	0,33,30,1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,12,0,0,
	36,41,3,6,3,0,37,38,5,6,0,0,38,40,3,6,3,0,39,37,1,0,0,0,40,43,1,0,0,0,41,
	39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,13,0,0,45,
	49,1,0,0,0,46,47,5,12,0,0,47,49,5,13,0,0,48,35,1,0,0,0,48,46,1,0,0,0,49,
	5,1,0,0,0,50,51,5,2,0,0,51,52,5,7,0,0,52,53,3,14,7,0,53,7,1,0,0,0,54,55,
	5,10,0,0,55,60,3,14,7,0,56,57,5,6,0,0,57,59,3,14,7,0,58,56,1,0,0,0,59,62,
	1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,64,5,
	11,0,0,64,68,1,0,0,0,65,66,5,10,0,0,66,68,5,11,0,0,67,54,1,0,0,0,67,65,
	1,0,0,0,68,9,1,0,0,0,69,70,5,14,0,0,70,75,3,12,6,0,71,72,5,6,0,0,72,74,
	3,12,6,0,73,71,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,
	1,0,0,0,77,75,1,0,0,0,78,79,5,15,0,0,79,11,1,0,0,0,80,83,3,14,7,0,81,83,
	3,20,10,0,82,80,1,0,0,0,82,81,1,0,0,0,83,13,1,0,0,0,84,86,3,2,1,0,85,87,
	3,16,8,0,86,85,1,0,0,0,86,87,1,0,0,0,87,15,1,0,0,0,88,89,5,8,0,0,89,94,
	3,18,9,0,90,91,5,6,0,0,91,93,3,18,9,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,
	1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,5,9,0,0,98,17,1,
	0,0,0,99,102,5,4,0,0,100,101,5,5,0,0,101,103,3,20,10,0,102,100,1,0,0,0,
	102,103,1,0,0,0,103,19,1,0,0,0,104,111,3,2,1,0,105,111,5,1,0,0,106,108,
	5,4,0,0,107,109,3,16,8,0,108,107,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,
	0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,111,21,1,0,0,0,12,33,
	41,48,60,67,75,82,86,94,102,108,110];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonGenParser.__ATN) {
			JsonGenParser.__ATN = new ATNDeserializer().deserialize(JsonGenParser._serializedATN);
		}

		return JsonGenParser.__ATN;
	}


	static DecisionsToDFA = JsonGenParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class JsongenContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(JsonGenParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_jsongen;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterJsongen) {
	 		listener.enterJsongen(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitJsongen) {
	 		listener.exitJsongen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitJsongen) {
			return visitor.visitJsongen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleValueContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(JsonGenParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(JsonGenParser.NUMBER, 0);
	}
	public obj(): ObjContext {
		return this.getTypedRuleContext(ObjContext, 0) as ObjContext;
	}
	public arr(): ArrContext {
		return this.getTypedRuleContext(ArrContext, 0) as ArrContext;
	}
	public TRUE(): TerminalNode {
		return this.getToken(JsonGenParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(JsonGenParser.FALSE, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(JsonGenParser.NULL, 0);
	}
	public placeholder(): PlaceholderContext {
		return this.getTypedRuleContext(PlaceholderContext, 0) as PlaceholderContext;
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_simpleValue;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterSimpleValue) {
	 		listener.enterSimpleValue(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitSimpleValue) {
	 		listener.exitSimpleValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitSimpleValue) {
			return visitor.visitSimpleValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(JsonGenParser.LCURL, 0);
	}
	public pair_list(): PairContext[] {
		return this.getTypedRuleContexts(PairContext) as PairContext[];
	}
	public pair(i: number): PairContext {
		return this.getTypedRuleContext(PairContext, i) as PairContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(JsonGenParser.RCURL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JsonGenParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JsonGenParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_obj;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterObj) {
	 		listener.enterObj(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitObj) {
	 		listener.exitObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(JsonGenParser.STRING, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(JsonGenParser.COLON, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_pair;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterPair) {
	 		listener.enterPair(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitPair) {
	 		listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LSQUARE(): TerminalNode {
		return this.getToken(JsonGenParser.LSQUARE, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public RSQUARE(): TerminalNode {
		return this.getToken(JsonGenParser.RSQUARE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JsonGenParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JsonGenParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_arr;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterArr) {
	 		listener.enterArr(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitArr) {
	 		listener.exitArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlaceholderContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPLACEHOLDER(): TerminalNode {
		return this.getToken(JsonGenParser.LPLACEHOLDER, 0);
	}
	public placeholderValue_list(): PlaceholderValueContext[] {
		return this.getTypedRuleContexts(PlaceholderValueContext) as PlaceholderValueContext[];
	}
	public placeholderValue(i: number): PlaceholderValueContext {
		return this.getTypedRuleContext(PlaceholderValueContext, i) as PlaceholderValueContext;
	}
	public RPLACEHOLDER(): TerminalNode {
		return this.getToken(JsonGenParser.RPLACEHOLDER, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JsonGenParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JsonGenParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_placeholder;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterPlaceholder) {
	 		listener.enterPlaceholder(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitPlaceholder) {
	 		listener.exitPlaceholder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitPlaceholder) {
			return visitor.visitPlaceholder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlaceholderValueContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return JsonGenParser.RULE_placeholderValue;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterPlaceholderValue) {
	 		listener.enterPlaceholderValue(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitPlaceholderValue) {
	 		listener.exitPlaceholderValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitPlaceholderValue) {
			return visitor.visitPlaceholderValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return JsonGenParser.RULE_value;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JsonGenParser.LPAREN, 0);
	}
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JsonGenParser.RPAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JsonGenParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JsonGenParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_args;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterArgs) {
	 		listener.enterArgs(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitArgs) {
	 		listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(JsonGenParser.IDENTIFIER, 0);
	}
	public ASSIGNMENT(): TerminalNode {
		return this.getToken(JsonGenParser.ASSIGNMENT, 0);
	}
	public parameterValue(): ParameterValueContext {
		return this.getTypedRuleContext(ParameterValueContext, 0) as ParameterValueContext;
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_arg;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterValueContext extends ParserRuleContext {
	constructor(parser?: JsonGenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleValue(): SimpleValueContext {
		return this.getTypedRuleContext(SimpleValueContext, 0) as SimpleValueContext;
	}
	public RANGE_VALUE(): TerminalNode {
		return this.getToken(JsonGenParser.RANGE_VALUE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(JsonGenParser.IDENTIFIER, 0);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
    public get ruleIndex(): number {
    	return JsonGenParser.RULE_parameterValue;
	}
	public enterRule(listener: JsonGenParserListener): void {
	    if(listener.enterParameterValue) {
	 		listener.enterParameterValue(this);
		}
	}
	public exitRule(listener: JsonGenParserListener): void {
	    if(listener.exitParameterValue) {
	 		listener.exitParameterValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonGenParserVisitor<Result>): Result {
		if (visitor.visitParameterValue) {
			return visitor.visitParameterValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
