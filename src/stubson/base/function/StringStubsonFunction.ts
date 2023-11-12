import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import StubsonType from "../../core/type/abstract/StubsonType";
import StubsonString from "../../core/type/implementation/StubsonString";
import {StubsonParserVisitor} from "../../core/function/StubsonParserVisitor";

export default class StringStubsonFunction extends StubsonParserVisitor {
    override execute(context: StubsonContext, args: StubsonArgs) {
        let result = ""
        args.forEach(value => {
            if (value instanceof StubsonType) {
                let json = context.resolve(value)
                if (json instanceof Object) {
                    json = JSON.stringify(json)
                }
                result += json
            }

        })

        return new StubsonString(result)
    }
}