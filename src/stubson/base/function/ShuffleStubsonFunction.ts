import StubsonContext from "../../core/context/StubsonContext";
import StubsonArgs from "../../core/args/StubsonArgs";
import StubsonString from "../../core/type/implementation/StubsonString";
import StubsonArray from "../../core/type/implementation/StubsonArray";
import StubsonValue from "../../core/type/implementation/StubsonValue";
import {StubsonFunction} from "../../core/function/StubsonFunction";

export default class ShuffleStubsonFunction extends StubsonFunction {
    override execute(context: StubsonContext, args: StubsonArgs) {
        let result = null
        args?.forEach(value => {
            if (result) return

            if (value instanceof StubsonString) {
                let stringValue = value.value() as string
                let shuffled = Array.from(stringValue).sort(() => Math.random() - .5).join('')
                result = new StubsonString(shuffled)
            }

            if (value instanceof StubsonArray) {
                let arrayValue = value.value()
                let shuffled = Array.from(arrayValue).sort(() => Math.random() - .5)
                result = new StubsonArray(shuffled)
            }

            if (value instanceof StubsonValue) {
                let args = new StubsonArgs()
                args.set('0', context.get(value.identifier, value.args))
                result = this.execute(context, args)
            }

        })

        return result
    }
}