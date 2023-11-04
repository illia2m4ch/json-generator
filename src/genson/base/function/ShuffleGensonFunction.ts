import {GensonContext} from "../../core/context/GensonContext";
import {GensonArgs} from "../../core/args/GensonArgs";
import {GensonString} from "../../core/type/implementation/GensonString";
import {GensonArray} from "../../core/type/implementation/GensonArray";
import {GensonValue} from "../../core/type/implementation/GensonValue";
import {GensonFunction} from "../../core/function/GensonFunction";

export class ShuffleGensonFunction extends GensonFunction {
    override execute(context: GensonContext, args: GensonArgs) {
        let result = null
        args?.forEach(value => {
            if (result) return

            if (value instanceof GensonString) {
                let stringValue = value.value() as string
                let shuffled = Array.from(stringValue).sort(() => Math.random() - .5).join('')
                result = new GensonString(shuffled)
            }

            if (value instanceof GensonArray) {
                let arrayValue = value.value()
                let shuffled = Array.from(arrayValue).sort(() => Math.random() - .5)
                result = new GensonArray(shuffled)
            }

            if (value instanceof GensonValue) {
                let args = new GensonArgs()
                args.set('0', context.get(value.identifier, value.args))
                result = this.execute(context, args)
            }

        })

        return result
    }
}