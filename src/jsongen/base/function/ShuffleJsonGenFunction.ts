import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenArgs} from "../../core/args/JsonGenArgs";
import {JsonGenString} from "../../core/type/implementation/JsonGenString";
import {JsonGenArray} from "../../core/type/implementation/JsonGenArray";
import {JsonGenValue} from "../../core/type/implementation/JsonGenValue";
import {JsonGenFunction} from "../../core/function/JsonGenFunction";

export class ShuffleJsonGenFunction extends JsonGenFunction {
    override execute(context: JsonGenContext, args: JsonGenArgs) {
        let result = null
        args?.forEach(value => {
            if (result) return

            if (value instanceof JsonGenString) {
                let stringValue = value.value() as string
                let shuffled = Array.from(stringValue).sort(() => Math.random() - .5).join('')
                result = new JsonGenString(shuffled)
            }

            if (value instanceof JsonGenArray) {
                let arrayValue = value.value()
                let shuffled = Array.from(arrayValue).sort(() => Math.random() - .5)
                result = new JsonGenArray(shuffled)
            }

            if (value instanceof JsonGenValue) {
                let args = new JsonGenArgs()
                args.set('0', context.get(value.identifier, value.args))
                result = this.execute(context, args)
            }

        })

        return result
    }
}