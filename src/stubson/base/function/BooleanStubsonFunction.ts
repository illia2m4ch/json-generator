import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import StubsonType from "../../core/type/abstract/StubsonType";
import StubsonPlaceholder from "../../core/type/implementation/StubsonPlaceholder";
import {StubsonFunction} from "../../core/function/StubsonFunction";

export default class BooleanStubsonFunction extends StubsonFunction {
    execute(context: StubsonContext, args: StubsonArgs): StubsonType<any> {
        return new StubsonPlaceholder([true, false])
    }
}