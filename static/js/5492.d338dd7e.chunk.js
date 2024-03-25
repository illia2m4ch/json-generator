"use strict";(self.webpackChunktest_data_generator=self.webpackChunktest_data_generator||[]).push([[5492],{5492:function(e,t,n){n.r(t),n.d(t,{conf:function(){return m},language:function(){return b}});var o,i,r=n(3433),s=n(7762),c=n(8497),d=Object.defineProperty,a=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,k=Object.prototype.hasOwnProperty,l=function(e,t,n,o){if(t&&"object"===typeof t||"function"===typeof t){var i,r=(0,s.Z)(p(t));try{var c=function(){var r=i.value;k.call(e,r)||r===n||d(e,r,{get:function(){return t[r]},enumerable:!(o=a(t,r))||o.enumerable})};for(r.s();!(i=r.n()).done;)c()}catch(l){r.e(l)}finally{r.f()}}return e},x={};l(x,o=c,"default"),i&&l(i,o,"default");var m={comments:{blockComment:["{/*","*/}"]},brackets:[["{","}"]],autoClosingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"\u201c",close:"\u201d"},{open:"\u2018",close:"\u2019"},{open:"`",close:"`"},{open:"{",close:"}"},{open:"(",close:")"},{open:"_",close:"_"},{open:"**",close:"**"},{open:"<",close:">"}],onEnterRules:[{beforeText:/^\s*- .+/,action:{indentAction:x.languages.IndentAction.None,appendText:"- "}},{beforeText:/^\s*\+ .+/,action:{indentAction:x.languages.IndentAction.None,appendText:"+ "}},{beforeText:/^\s*\* .+/,action:{indentAction:x.languages.IndentAction.None,appendText:"* "}},{beforeText:/^> /,action:{indentAction:x.languages.IndentAction.None,appendText:"> "}},{beforeText:/<\w+/,action:{indentAction:x.languages.IndentAction.Indent}},{beforeText:/\s+>\s*$/,action:{indentAction:x.languages.IndentAction.Indent}},{beforeText:/<\/\w+>/,action:{indentAction:x.languages.IndentAction.Outdent}}].concat((0,r.Z)(Array.from({length:100},(function(e,t){return{beforeText:new RegExp("^".concat(t,"\\. .+")),action:{indentAction:x.languages.IndentAction.None,appendText:"".concat(t+1,". ")}}}))))},b={defaultToken:"",tokenPostfix:".mdx",control:/[!#()*+.[\\\]_`{}\-]/,escapes:/\\@control/,tokenizer:{root:[[/^---$/,{token:"meta.content",next:"@frontmatter",nextEmbedded:"yaml"}],[/^\s*import/,{token:"keyword",next:"@import",nextEmbedded:"js"}],[/^\s*export/,{token:"keyword",next:"@export",nextEmbedded:"js"}],[/<\w+/,{token:"type.identifier",next:"@jsx"}],[/<\/?\w+>/,"type.identifier"],[/^(\s*)(>*\s*)(#{1,6}\s)/,[{token:"white"},{token:"comment"},{token:"keyword",next:"@header"}]],[/^(\s*)(>*\s*)([*+-])(\s+)/,["white","comment","keyword","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/,["white","comment","keyword"]],[/`{3,}(\s.*)?$/,{token:"string",next:"@codeblock_backtick"}],[/~{3,}(\s.*)?$/,{token:"string",next:"@codeblock_tilde"}],[/`{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_backtick",nextEmbedded:"$1"}],[/~{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_tilde",nextEmbedded:"$1"}],[/^(\s*)(-{4,})$/,["white","comment"]],[/^(\s*)(>+)/,["white","comment"]],{include:"content"}],content:[[/(\[)(.+)(]\()(.+)(\s+".*")(\))/,["","string.link","","type.identifier","string.link",""]],[/(\[)(.+)(]\()(.+)(\))/,["","type.identifier","","string.link",""]],[/(\[)(.+)(]\[)(.+)(])/,["","type.identifier","","type.identifier",""]],[/(\[)(.+)(]:\s+)(\S*)/,["","type.identifier","","string.link"]],[/(\[)(.+)(])/,["","type.identifier",""]],[/`.*`/,"variable.source"],[/_/,{token:"emphasis",next:"@emphasis_underscore"}],[/\*(?!\*)/,{token:"emphasis",next:"@emphasis_asterisk"}],[/\*\*/,{token:"strong",next:"@strong"}],[/{/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}]],import:[[/'\s*(;|$)/,{token:"string",next:"@pop",nextEmbedded:"@pop"}]],expression:[[/{/,{token:"delimiter.bracket",next:"@expression"}],[/}/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],export:[[/^\s*$/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],jsx:[[/\s+/,""],[/(\w+)(=)("(?:[^"\\]|\\.)*")/,["attribute.name","operator","string"]],[/(\w+)(=)('(?:[^'\\]|\\.)*')/,["attribute.name","operator","string"]],[/(\w+(?=\s|>|={|$))/,["attribute.name"]],[/={/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}],[/>/,{token:"type.identifier",next:"@pop"}]],header:[[/.$/,{token:"keyword",next:"@pop"}],{include:"content"},[/./,{token:"keyword"}]],strong:[[/\*\*/,{token:"strong",next:"@pop"}],{include:"content"},[/./,{token:"strong"}]],emphasis_underscore:[[/_/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],emphasis_asterisk:[[/\*(?!\*)/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],frontmatter:[[/^---$/,{token:"meta.content",nextEmbedded:"@pop",next:"@pop"}]],codeblock_highlight_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_highlight_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblock_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]]}}}}]);
//# sourceMappingURL=5492.d338dd7e.chunk.js.map