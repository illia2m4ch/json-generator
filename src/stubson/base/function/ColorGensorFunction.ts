import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import {StubsonFunction} from "../../core/function/StubsonFunction";
import StubsonString from "../../core/type/implementation/StubsonString";

export default class ColorStubsonFunction extends StubsonFunction {
    override execute(context: StubsonContext, args: StubsonArgs) {
        const randomColor = "#000000"
            .replace(/0/g,() => (~~(Math.random()*16)).toString(16))
        return new StubsonString(randomColor)
    }
}