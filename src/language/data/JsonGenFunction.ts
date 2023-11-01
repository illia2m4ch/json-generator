import {JsonGenContext} from "./JsonGenContext";
import {JsonGenArray, JsonGenNode, JsonGenObject, JsonGenString} from "../model/JsonGenNode";
import {JsonGenRangeValue} from "../model/JsonGenRangeValue";
import {JsonGenRandom} from "../model/JsonGenRandom";
import {JsonGenValue} from "../model/JsonGenValue";

export abstract class JsonGenFunction {
    abstract execute(context: JsonGenContext, args: Map<string, any>)
}

export class StringJsonGenFunction extends JsonGenFunction {
    override execute(context: JsonGenContext, args: Map<string, any>) {
        let result = ""
        args.forEach(value => {
            if (value instanceof JsonGenNode) {
                let json = value.json(context)
                if (value instanceof JsonGenObject || value instanceof JsonGenArray) {
                    json = JSON.stringify(value)
                }
                result += json
            }

            if (value instanceof JsonGenRangeValue) {
                result += JsonGenRandom.number(value.from, value.to)
            }

            if (value instanceof JsonGenValue) {
                let json = context.get(value.identifier, value.args).json(context)
                if (value instanceof JsonGenObject || value instanceof JsonGenArray) {
                    json = JSON.stringify(value)
                }
                result += json
            }

            // jsongenvalue ?

        })

        return new JsonGenString(result)
    }
}

export class ShuffleJsonGenFunction extends JsonGenFunction {
    override execute(context: JsonGenContext, args: Map<string, any>) {
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

        })

        return result
    }
}