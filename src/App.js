import './App.css'
import React from 'react'
import Editor from '@monaco-editor/react'
import * as JsonGenTokensProvider from '../src/language/parser/JsonGenTokensProvider.ts'
import {parseTree, parseTreeStr} from "./language/parser/JsonGenParser.ts";

function initMonaco(monaco) {
  monaco.languages.register({ id: 'jsonGen' })
  monaco.languages.setTokensProvider('jsonGen', new JsonGenTokensProvider.JsonGenTokensProvider())

  let commonFg = 'ffffff'
  let argumentsFg = '979797'
  let placeholderFg = 'FF9518'
  let valueFg = 'FFE27B'
  let identifierFg = '9278A7'

  monaco.editor.defineTheme('jsonGenTheme', {
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
      { token: 'FALSE',   foreground: valueFg },
    ]
  })
}

function onEditorChange(value, event) {

}

function App() {
  return <Editor
      height="90vh"
      theme="jsonGenTheme"
      defaultLanguage="jsonGen"
      defaultValue={
`{
    "items": [
        {
            "name": <name(lang = en), null, {}, 0..100> (optional),
            "age": <"Illia", 0..100, null> (optional),
            "arr": [ <1, 2, 3> ] (size = 2..5)
        } (optional, nullable)
    ] (size = 2..5)
}`
      }
      beforeMount={initMonaco}
      onChange={onEditorChange}
  />
}

export default App
