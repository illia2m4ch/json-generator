import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import {StubsonFunction} from "../../core/function/StubsonFunction";
import StubsonNumber from "../../core/type/implementation/StubsonNumber";

export default class TimestampStubsonFunction extends StubsonFunction {
    override execute(context: StubsonContext, args: StubsonArgs) {
        return new StubsonNumber(Date.now())
    }
}