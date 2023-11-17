// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/StubsonLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class StubsonLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"RANGE_VALUE", "STRING", "NUMBER", "INT", "EXP", "NULL", "TRUE", "FALSE", 
		"IDENTIFIER", "IDENTIFIER_START", "IDENTIFIER_PART", "ASSIGNMENT", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", "RCURL", "LPLACEHOLDER", 
		"RPLACEHOLDER", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, StubsonLexer._ATN, StubsonLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "StubsonLexer.g4"; }

	public get literalNames(): (string | null)[] { return StubsonLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return StubsonLexer.symbolicNames; }
	public get ruleNames(): string[] { return StubsonLexer.ruleNames; }

	public get serializedATN(): number[] { return StubsonLexer._serializedATN; }

	public get channelNames(): string[] { return StubsonLexer.channelNames; }

	public get modeNames(): string[] { return StubsonLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,19,178,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,65,
	8,1,10,1,12,1,68,9,1,1,1,1,1,1,2,3,2,73,8,2,1,2,1,2,1,2,4,2,78,8,2,11,2,
	12,2,79,3,2,82,8,2,1,2,3,2,85,8,2,1,3,1,3,1,3,5,3,90,8,3,10,3,12,3,93,9,
	3,3,3,95,8,3,1,4,1,4,3,4,99,8,4,1,4,4,4,102,8,4,11,4,12,4,103,1,5,1,5,1,
	5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,5,8,124,8,
	8,10,8,12,8,127,9,8,1,9,1,9,1,10,1,10,3,10,133,8,10,1,11,1,11,1,12,1,12,
	1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,
	20,1,20,1,21,1,21,1,22,1,22,1,22,3,22,160,8,22,1,23,1,23,1,23,1,23,1,23,
	1,23,1,24,1,24,1,25,1,25,1,26,4,26,173,8,26,11,26,12,26,174,1,26,1,26,0,
	0,27,1,1,3,2,5,3,7,0,9,0,11,4,13,5,15,6,17,7,19,0,21,0,23,8,25,9,27,10,
	29,11,31,12,33,13,35,14,37,15,39,16,41,17,43,18,45,0,47,0,49,0,51,0,53,
	19,1,0,9,1,0,48,57,1,0,49,57,2,0,69,69,101,101,2,0,43,43,45,45,2,0,65,90,
	97,122,8,0,34,34,47,47,92,92,98,98,102,102,110,110,114,114,116,116,3,0,
	48,57,65,70,97,102,3,0,0,31,34,34,92,92,3,0,9,10,13,13,32,32,183,0,1,1,
	0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
	17,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,
	0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
	43,1,0,0,0,0,53,1,0,0,0,1,55,1,0,0,0,3,61,1,0,0,0,5,72,1,0,0,0,7,94,1,0,
	0,0,9,96,1,0,0,0,11,105,1,0,0,0,13,110,1,0,0,0,15,115,1,0,0,0,17,121,1,
	0,0,0,19,128,1,0,0,0,21,132,1,0,0,0,23,134,1,0,0,0,25,136,1,0,0,0,27,138,
	1,0,0,0,29,140,1,0,0,0,31,142,1,0,0,0,33,144,1,0,0,0,35,146,1,0,0,0,37,
	148,1,0,0,0,39,150,1,0,0,0,41,152,1,0,0,0,43,154,1,0,0,0,45,156,1,0,0,0,
	47,161,1,0,0,0,49,167,1,0,0,0,51,169,1,0,0,0,53,172,1,0,0,0,55,56,3,5,2,
	0,56,57,5,46,0,0,57,58,5,46,0,0,58,59,1,0,0,0,59,60,3,5,2,0,60,2,1,0,0,
	0,61,66,5,34,0,0,62,65,3,45,22,0,63,65,3,51,25,0,64,62,1,0,0,0,64,63,1,
	0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,66,1,0,
	0,0,69,70,5,34,0,0,70,4,1,0,0,0,71,73,5,45,0,0,72,71,1,0,0,0,72,73,1,0,
	0,0,73,74,1,0,0,0,74,81,3,7,3,0,75,77,5,46,0,0,76,78,7,0,0,0,77,76,1,0,
	0,0,78,79,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,75,1,0,0,
	0,81,82,1,0,0,0,82,84,1,0,0,0,83,85,3,9,4,0,84,83,1,0,0,0,84,85,1,0,0,0,
	85,6,1,0,0,0,86,95,5,48,0,0,87,91,7,1,0,0,88,90,7,0,0,0,89,88,1,0,0,0,90,
	93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,94,86,
	1,0,0,0,94,87,1,0,0,0,95,8,1,0,0,0,96,98,7,2,0,0,97,99,7,3,0,0,98,97,1,
	0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,102,7,0,0,0,101,100,1,0,0,0,102,
	103,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,10,1,0,0,0,105,106,5,110,
	0,0,106,107,5,117,0,0,107,108,5,108,0,0,108,109,5,108,0,0,109,12,1,0,0,
	0,110,111,5,116,0,0,111,112,5,114,0,0,112,113,5,117,0,0,113,114,5,101,0,
	0,114,14,1,0,0,0,115,116,5,102,0,0,116,117,5,97,0,0,117,118,5,108,0,0,118,
	119,5,115,0,0,119,120,5,101,0,0,120,16,1,0,0,0,121,125,3,19,9,0,122,124,
	3,21,10,0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,
	0,126,18,1,0,0,0,127,125,1,0,0,0,128,129,7,4,0,0,129,20,1,0,0,0,130,133,
	3,19,9,0,131,133,7,0,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,22,1,0,0,0,
	134,135,5,61,0,0,135,24,1,0,0,0,136,137,5,44,0,0,137,26,1,0,0,0,138,139,
	5,58,0,0,139,28,1,0,0,0,140,141,5,40,0,0,141,30,1,0,0,0,142,143,5,41,0,
	0,143,32,1,0,0,0,144,145,5,91,0,0,145,34,1,0,0,0,146,147,5,93,0,0,147,36,
	1,0,0,0,148,149,5,123,0,0,149,38,1,0,0,0,150,151,5,125,0,0,151,40,1,0,0,
	0,152,153,5,60,0,0,153,42,1,0,0,0,154,155,5,62,0,0,155,44,1,0,0,0,156,159,
	5,92,0,0,157,160,7,5,0,0,158,160,3,47,23,0,159,157,1,0,0,0,159,158,1,0,
	0,0,160,46,1,0,0,0,161,162,5,117,0,0,162,163,3,49,24,0,163,164,3,49,24,
	0,164,165,3,49,24,0,165,166,3,49,24,0,166,48,1,0,0,0,167,168,7,6,0,0,168,
	50,1,0,0,0,169,170,8,7,0,0,170,52,1,0,0,0,171,173,7,8,0,0,172,171,1,0,0,
	0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,
	6,26,0,0,177,54,1,0,0,0,15,0,64,66,72,79,81,84,91,94,98,103,125,132,159,
	174,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StubsonLexer.__ATN) {
			StubsonLexer.__ATN = new ATNDeserializer().deserialize(StubsonLexer._serializedATN);
		}

		return StubsonLexer.__ATN;
	}


	static DecisionsToDFA = StubsonLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}