import {JsonGenContext} from "./JsonGenContext";
import {JsonGenArray, JsonGenNode, JsonGenObject, JsonGenString} from "../model/JsonGenNode";
import {JsonGenRangeValue} from "../model/JsonGenRangeValue";
import {JsonGenRandom} from "../model/JsonGenRandom";
import {JsonGenValue} from "../model/JsonGenValue";
import {JsonGenType} from "../model/JsonGenType";

export abstract class JsonGenFunction {
    abstract execute(context: JsonGenContext, args: Map<string, any>)
}

export class StringJsonGenFunction extends JsonGenFunction {
    override execute(context: JsonGenContext, args: Map<string, any>) {
        let result = ""
        args.forEach(value => {
            if (value instanceof JsonGenType) {
                let json = value.json(context)
                if (json instanceof Object) {
                    json = JSON.stringify(json)
                }
                result += json
            }

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