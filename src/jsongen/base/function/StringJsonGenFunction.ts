import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenArgs} from "../../core/args/JsonGenArgs";
import {JsonGenType} from "../../core/type/abstract/JsonGenType";
import {JsonGenString} from "../../core/type/implementation/JsonGenString";
import {JsonGenFunction} from "../../core/function/JsonGenFunction";

export class StringJsonGenFunction extends JsonGenFunction {
    override execute(context: JsonGenContext, args: JsonGenArgs) {
        let result = ""
        args.forEach(value => {
            if (value instanceof JsonGenType) {
                let json = context.resolve(value)
                if (json instanceof Object) {
                    json = JSON.stringify(json)
                }
                result += json
            }

        })

        return new JsonGenString(result)
    }
}