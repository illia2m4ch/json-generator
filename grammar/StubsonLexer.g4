lexer grammar StubsonLexer;

// EXTENDED VALUES

RANGE_VALUE: NUMBER '..' NUMBER ;

// PRIMITIVES

STRING: '"' (ESC | SAFECODEPOINT)* '"' ;

NUMBER: '-'? INT ('.' [0-9] +)? EXP? ;
fragment INT: '0' | [1-9] [0-9]* ; // integer part forbis leading 0s (e.g. `01`)
fragment EXP: [Ee] [+\-]? [0-9]+ ; // exponent number permits leading 0s (e.g. `1e01`)

NULL: 'null' ;
TRUE: 'true' ;
FALSE: 'false' ;

// IDENTIFIER
IDENTIFIER: IDENTIFIER_START IDENTIFIER_PART* ;
fragment IDENTIFIER_START: [a-zA-Z] ;
fragment IDENTIFIER_PART : IDENTIFIER_START | [0-9] ;

// BASIC
ASSIGNMENT: '=' ;
COMMA: ',' ;
COLON: ':' ;
LPAREN: '(' ;
RPAREN: ')' ;
LSQUARE: '[' ;
RSQUARE: ']';
LCURL: '{' ;
RCURL: '}' ;
LPLACEHOLDER: '<' ;
RPLACEHOLDER: '>' ;

fragment ESC: '\\' (["\\/bfnrt] | UNICODE) ;
fragment UNICODE: 'u' HEX HEX HEX HEX ;
fragment HEX: [0-9a-fA-F] ;
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F] ;

WS: [ \t\n\r] + -> skip ;

