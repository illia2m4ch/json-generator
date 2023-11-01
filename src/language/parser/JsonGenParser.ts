import {CharStream, CommonTokenStream, ErrorListener, Lexer, Token} from "antlr4";
import JsonGenLexer from "../core/JsonGenLexer.ts"
import JsonGenParser from "../core/JsonGenParser.ts";

class ConsoleErrorListener extends ErrorListener<Token> {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.log("ERROR " + msg);
    }
}

export function createLexer(input: string) {
    const chars = new CharStream(input);
    return new JsonGenLexer(chars);
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
    return new JsonGenParser(tokens);
}

export function parseTree(input: string) {
    const parser = createParser(input);

    return parser.jsonGen();
}

export function parseTreeStr(input: string) {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ConsoleErrorListener());

    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new ConsoleErrorListener());

    const tree = parser.jsonGen();

    return tree.toStringTree(parser.ruleNames, parser);
}