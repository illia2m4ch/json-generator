import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import {StubsonParserVisitor} from "../../core/function/StubsonParserVisitor";
import StubsonNumber from "../../core/type/implementation/StubsonNumber";

export default class TimestampStubsonFunction extends StubsonParserVisitor {
    override execute(context: StubsonContext, args: StubsonArgs) {
        return new StubsonNumber(Date.now())
    }
}