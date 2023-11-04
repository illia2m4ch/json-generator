import {CharStream, CommonTokenStream, ErrorListener, Lexer, Token} from "antlr4";
import GensonLexer from "../build/GensonLexer"
import GensonParser from "../build/GensonParser";

class ConsoleErrorListener extends ErrorListener<Token> {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.log("ERROR " + msg);
    }
}

export function createLexer(input: string) {
    return new GensonLexer(new CharStream(input));
}

export function getTokens(input: string): Token[] {
    return createLexer(input).getAllTokens()
}

function createParser(input: string) {
    const lexer = createLexer(input);
    return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer: Lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new GensonParser(tokens);
}

export function parseTree(input: string) {
    const parser = createParser(input);

    return parser.genson();
}

export function parseTreeStr(input: string) {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ConsoleErrorListener());

    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new ConsoleErrorListener());

    const tree = parser.genson();

    return tree.toStringTree(parser.ruleNames, parser);
}