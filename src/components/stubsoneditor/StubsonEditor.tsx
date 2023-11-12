import React from "react";
import {Editor, Monaco} from "@monaco-editor/react";
import {StubsonTokensProvider} from "../../stubson/parser/StubsonTokensProvider";
import {languages} from "monaco-editor";

function StubsonEditor(
    props: {
        className: string,
        onValueChange: (value: string) => void
    }
) {
    return <div className={props.className}>
        <Editor
            height='100vh'
            theme='stubsonTheme'
            options={{
                minimap: { enabled: false }
            }}
            defaultLanguage='stubson'
            defaultValue={
                `{
    "items": [
        {
            "name": <name(lang = en), null, {}, 0..100> (optional),
            "age": <"Illia", 0..100, null> (optional),
            "arr": [ <1, 2, 3> ] (size = 2..5)
        }
    ] (size = 2..5)
}`
            }
            beforeMount={initMonaco}
            onChange={props.onValueChange}
        />
    </div>
}

function initMonaco(monaco: Monaco) {
    monaco.languages.register({ id: 'stubson' })
    monaco.languages.setTokensProvider('stubson', new StubsonTokensProvider())

    const config: languages.LanguageConfiguration = {
        'brackets': [
            ['{', '}'],
            ['[', ']'],
            ['<', '>'],
            ['(', ')']
        ],
        'colorizedBracketPairs': [],
        'autoClosingPairs': [
            { 'open': '{', 'close': '}', 'notIn': ['STRING'] },
            { 'open': '[', 'close': ']', 'notIn': ['STRING'] },
            { 'open': '<', 'close': '>', 'notIn': ['STRING'] },
            { 'open': '(', 'close': ')', 'notIn': ['STRING'] },
            { 'open': '"', 'close': '"', 'notIn': ['STRING'] }
        ],
        'indentationRules': {
            'increaseIndentPattern': new RegExp('({+(?=((\\\\.|[^\'\\\\])*\'(\\\\.|[^\'\\\\])*\')*[^\'}]*)$)|(\\[+(?=((\\\\.|[^\'\\\\])*\'(\\\\.|[^\'\\\\])*\')*[^\'\\]]*)$)'),
            'decreaseIndentPattern': new RegExp('^\\s*[}\\]],?\\s*$')
        }
    }
    monaco.languages.setLanguageConfiguration('stubson', config)

    let commonFg = 'ffffff'
    let argumentsFg = '979797'
    let placeholderFg = 'FF9518'
    let valueFg = 'FFE27B'
    let identifierFg = '9278A7'

    monaco.editor.defineTheme('stubsonTheme', {
        base: 'vs-dark',
        inherit: true,
        colors: {
        },
        rules: [
            { token: 'RANGE_VALUE',   foreground: valueFg },

            { token: 'STRING',   foreground: commonFg },

            { token: 'NUMBER',   foreground: valueFg },
            { token: 'IDENTIFIER',   foreground: identifierFg },

            { token: 'ASSIGNMENT',   foreground: commonFg },
            { token: 'COMMA',   foreground: commonFg },
            { token: 'COLON',   foreground: commonFg },
            { token: 'LPAREN',   foreground: argumentsFg },
            { token: 'RPAREN',   foreground: argumentsFg },
            { token: 'LSQUARE',   foreground: commonFg },
            { token: 'RSQUARE',   foreground: commonFg },
            { token: 'LPAREN',   foreground: commonFg },
            { token: 'RPAREN',   foreground: commonFg },

            { token: 'LPLACEHOLDER',   foreground: placeholderFg },
            { token: 'RPLACEHOLDER',   foreground: placeholderFg },

            { token: 'NULL',   foreground: valueFg },
            { token: 'TRUE',   foreground: valueFg },
            { token: 'FALSE',   foreground: valueFg }
        ]
    })
}

export default StubsonEditor