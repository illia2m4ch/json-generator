// Generated from /Users/user/Projects/react/test-data-generator/public/grammar/JsonGenLexer.g4 by ANTLR 4.13.1
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
export default class JsonGenLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"RANGE_VALUE", "STRING", "NUMBER", "INT", "EXP", "IDENTIFIER", "IDENTIFIER_START", 
		"IDENTIFIER_PART", "ASSIGNMENT", "COMMA", "COLON", "LPAREN", "RPAREN", 
		"LSQUARE", "RSQUARE", "LCURL", "RCURL", "LPLACEHOLDER", "RPLACEHOLDER", 
		"NULL", "TRUE", "FALSE", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, JsonGenLexer._ATN, JsonGenLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "JsonGenLexer.g4"; }

	public get literalNames(): (string | null)[] { return JsonGenLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return JsonGenLexer.symbolicNames; }
	public get ruleNames(): string[] { return JsonGenLexer.ruleNames; }

	public get serializedATN(): number[] { return JsonGenLexer._serializedATN; }

	public get channelNames(): string[] { return JsonGenLexer.channelNames; }

	public get modeNames(): string[] { return JsonGenLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,19,178,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,65,
	8,1,10,1,12,1,68,9,1,1,1,1,1,1,2,3,2,73,8,2,1,2,1,2,1,2,4,2,78,8,2,11,2,
	12,2,79,3,2,82,8,2,1,2,3,2,85,8,2,1,3,1,3,1,3,5,3,90,8,3,10,3,12,3,93,9,
	3,3,3,95,8,3,1,4,1,4,3,4,99,8,4,1,4,4,4,102,8,4,11,4,12,4,103,1,5,1,5,5,
	5,108,8,5,10,5,12,5,111,9,5,1,6,1,6,3,6,115,8,6,1,7,1,7,1,8,1,8,1,9,1,9,
	1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,
	17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,
	1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,3,22,160,8,22,1,23,1,23,1,23,1,
	23,1,23,1,23,1,24,1,24,1,25,1,25,1,26,4,26,173,8,26,11,26,12,26,174,1,26,
	1,26,0,0,27,1,1,3,2,5,3,7,0,9,0,11,4,13,0,15,0,17,5,19,6,21,7,23,8,25,9,
	27,10,29,11,31,12,33,13,35,14,37,15,39,16,41,17,43,18,45,0,47,0,49,0,51,
	0,53,19,1,0,9,1,0,48,57,1,0,49,57,2,0,69,69,101,101,2,0,43,43,45,45,2,0,
	65,90,97,122,8,0,34,34,47,47,92,92,98,98,102,102,110,110,114,114,116,116,
	3,0,48,57,65,70,97,102,3,0,0,31,34,34,92,92,3,0,9,10,13,13,32,32,183,0,
	1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,11,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
	0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
	1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,
	0,0,43,1,0,0,0,0,53,1,0,0,0,1,55,1,0,0,0,3,61,1,0,0,0,5,72,1,0,0,0,7,94,
	1,0,0,0,9,96,1,0,0,0,11,105,1,0,0,0,13,114,1,0,0,0,15,116,1,0,0,0,17,118,
	1,0,0,0,19,120,1,0,0,0,21,122,1,0,0,0,23,124,1,0,0,0,25,126,1,0,0,0,27,
	128,1,0,0,0,29,130,1,0,0,0,31,132,1,0,0,0,33,134,1,0,0,0,35,136,1,0,0,0,
	37,138,1,0,0,0,39,140,1,0,0,0,41,145,1,0,0,0,43,150,1,0,0,0,45,156,1,0,
	0,0,47,161,1,0,0,0,49,167,1,0,0,0,51,169,1,0,0,0,53,172,1,0,0,0,55,56,3,
	5,2,0,56,57,5,46,0,0,57,58,5,46,0,0,58,59,1,0,0,0,59,60,3,5,2,0,60,2,1,
	0,0,0,61,66,5,34,0,0,62,65,3,45,22,0,63,65,3,51,25,0,64,62,1,0,0,0,64,63,
	1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,66,1,
	0,0,0,69,70,5,34,0,0,70,4,1,0,0,0,71,73,5,45,0,0,72,71,1,0,0,0,72,73,1,
	0,0,0,73,74,1,0,0,0,74,81,3,7,3,0,75,77,5,46,0,0,76,78,7,0,0,0,77,76,1,
	0,0,0,78,79,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,75,1,0,
	0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,85,3,9,4,0,84,83,1,0,0,0,84,85,1,0,0,
	0,85,6,1,0,0,0,86,95,5,48,0,0,87,91,7,1,0,0,88,90,7,0,0,0,89,88,1,0,0,0,
	90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,94,
	86,1,0,0,0,94,87,1,0,0,0,95,8,1,0,0,0,96,98,7,2,0,0,97,99,7,3,0,0,98,97,
	1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,102,7,0,0,0,101,100,1,0,0,0,102,
	103,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,10,1,0,0,0,105,109,3,13,
	6,0,106,108,3,15,7,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
	110,1,0,0,0,110,12,1,0,0,0,111,109,1,0,0,0,112,115,3,15,7,0,113,115,7,0,
	0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,14,1,0,0,0,116,117,7,4,0,0,117,
	16,1,0,0,0,118,119,5,61,0,0,119,18,1,0,0,0,120,121,5,44,0,0,121,20,1,0,
	0,0,122,123,5,58,0,0,123,22,1,0,0,0,124,125,5,40,0,0,125,24,1,0,0,0,126,
	127,5,41,0,0,127,26,1,0,0,0,128,129,5,91,0,0,129,28,1,0,0,0,130,131,5,93,
	0,0,131,30,1,0,0,0,132,133,5,123,0,0,133,32,1,0,0,0,134,135,5,125,0,0,135,
	34,1,0,0,0,136,137,5,60,0,0,137,36,1,0,0,0,138,139,5,62,0,0,139,38,1,0,
	0,0,140,141,5,110,0,0,141,142,5,117,0,0,142,143,5,108,0,0,143,144,5,108,
	0,0,144,40,1,0,0,0,145,146,5,116,0,0,146,147,5,114,0,0,147,148,5,117,0,
	0,148,149,5,101,0,0,149,42,1,0,0,0,150,151,5,102,0,0,151,152,5,97,0,0,152,
	153,5,108,0,0,153,154,5,115,0,0,154,155,5,101,0,0,155,44,1,0,0,0,156,159,
	5,92,0,0,157,160,7,5,0,0,158,160,3,47,23,0,159,157,1,0,0,0,159,158,1,0,
	0,0,160,46,1,0,0,0,161,162,5,117,0,0,162,163,3,49,24,0,163,164,3,49,24,
	0,164,165,3,49,24,0,165,166,3,49,24,0,166,48,1,0,0,0,167,168,7,6,0,0,168,
	50,1,0,0,0,169,170,8,7,0,0,170,52,1,0,0,0,171,173,7,8,0,0,172,171,1,0,0,
	0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,
	6,26,0,0,177,54,1,0,0,0,15,0,64,66,72,79,81,84,91,94,98,103,109,114,159,
	174,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonGenLexer.__ATN) {
			JsonGenLexer.__ATN = new ATNDeserializer().deserialize(JsonGenLexer._serializedATN);
		}

		return JsonGenLexer.__ATN;
	}


	static DecisionsToDFA = JsonGenLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}