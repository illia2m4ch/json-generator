import {Token, ErrorListener} from 'antlr4'
import * as monaco from 'monaco-editor'
import ILineTokens = monaco.languages.ILineTokens
import IToken = monaco.languages.IToken
import {createLexer} from "./StubsonParserHelper"

export class StubsonState implements monaco.languages.IState {
    clone(): monaco.languages.IState {
        return new StubsonState()
    }

    equals(other: monaco.languages.IState): boolean {
        return true
    }

}

export class StubsonTokensProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState {
        return new StubsonState()
    }

    tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line)
    }

}

const EOF = -1

class StubsonToken implements IToken {
    scopes: string
    startIndex: number

    constructor(ruleName: string, startIndex: number) {
        this.scopes = ruleName === null ? "" : ruleName
        this.startIndex = startIndex
    }
}

class StubsonLineTokens implements ILineTokens {
    endState: monaco.languages.IState
    tokens: monaco.languages.IToken[]

    constructor(tokens: monaco.languages.IToken[]) {
        this.endState = new StubsonState()
        this.tokens = tokens
    }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
    let errorStartingPoints: number[] = []

    class ErrorCollectorListener extends ErrorListener<Token> {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            errorStartingPoints.push(column)
        }
    }

    const lexer = createLexer(input)
    lexer.removeErrorListeners()
    let errorListener = new ErrorCollectorListener()
    lexer.addErrorListener(errorListener)
    let done = false
    let myTokens: monaco.languages.IToken[] = []
    do {
        let token = lexer.nextToken()
        if (token == null) {
            done = true
        } else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true
            } else {
                let tokenTypeName = lexer.symbolicNames[token.type]
                let myToken = new StubsonToken(tokenTypeName, token.column)
                myTokens.push(myToken)
            }
        }
    } while (!done)

    // Add all errors
    for (let e of errorStartingPoints) {
        myTokens.push(new StubsonToken("error.stubson", e))
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1)

    return new StubsonLineTokens(myTokens)
}