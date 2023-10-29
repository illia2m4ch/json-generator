lexer grammar JsonGenLexer;

// EXTENDED VALUES

RANGE_VALUE: NUMBER '..' NUMBER ;

// PRIMITIVES

STRING: '"' (ESC | SAFECODEPOINT)* '"' ;

NUMBER: '-'? INT ('.' [0-9] +)? EXP? ;
fragment INT: '0' | [1-9] [0-9]* ; // integer part forbis leading 0s (e.g. `01`)
fragment EXP: [Ee] [+\-]? [0-9]+ ; // exponent number permits leading 0s (e.g. `1e01`)

// IDENTIFIER
IDENTIFIER: IDENTIFIER_START IDENTIFIER_PART* ;
fragment IDENTIFIER_START: IDENTIFIER_PART | [0-9] ;
fragment IDENTIFIER_PART : [a-zA-Z] ;

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

NULL: 'null' ;
TRUE: 'true' ;
FALSE: 'false' ;

mode DEFAULT_MODE;

fragment ESC: '\\' (["\\/bfnrt] | UNICODE) ;
fragment UNICODE: 'u' HEX HEX HEX HEX ;
fragment HEX: [0-9a-fA-F] ;
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F] ;

WS: [ \t\n\r] + -> skip ;
