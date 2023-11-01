parser grammar JsonGenParser;

options { tokenVocab = JsonGenLexer; }

// JSON

jsonGen
   : value EOF
   ;

simpleValue
   : STRING
   | NUMBER
   | obj
   | arr
   | TRUE
   | FALSE
   | NULL
   | placeholder
   ;

obj
   : LCURL pair (COMMA pair)* RCURL
   | LCURL RCURL
   ;

pair
   : STRING COLON value
   ;

arr
   : LSQUARE value (COMMA value)* RSQUARE
   | LSQUARE RSQUARE
   ;

// PLACEHOLDER

placeholder
    : LPLACEHOLDER placeholderValue (COMMA placeholderValue)* RPLACEHOLDER
    ;

placeholderValue
    : value
    | parameterValue
    ;

// VALUES

value
    : simpleValue args?
    ;

args
    : LPAREN arg (COMMA arg)* RPAREN
    ;

arg
    : IDENTIFIER ASSIGNMENT parameterValue
    | parameterValue
    ;

parameterValue
    : value
    | RANGE_VALUE
    | IDENTIFIER args?
    ;