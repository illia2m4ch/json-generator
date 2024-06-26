import StubsonContext from "../context/StubsonContext";
import StubsonType from "../type/abstract/StubsonType";
import StubsonArgs from "../args/StubsonArgs";

export abstract class StubsonFunction {
    abstract execute(context: StubsonContext, args: StubsonArgs): StubsonType<any>
}