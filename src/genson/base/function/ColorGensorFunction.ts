import {GensonContext} from "../../core/context/GensonContext";
import {GensonArgs} from "../../core/args/GensonArgs";
import {GensonFunction} from "../../core/function/GensonFunction";
import {GensonString} from "../../core/type/implementation/GensonString";

export default class ColorGensonFunction extends GensonFunction {
    override execute(context: GensonContext, args: GensonArgs) {
        const randomColor = "#000000"
            .replace(/0/g,() => (~~(Math.random()*16)).toString(16))
        return new GensonString(randomColor)
    }
}