import {GensonContext} from "../../core/context/GensonContext";
import {GensonArgs} from "../../core/args/GensonArgs";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonString} from "../../core/type/implementation/GensonString";
import {GensonFunction} from "../../core/function/GensonFunction";

export class StringGensonFunction extends GensonFunction {
    override execute(context: GensonContext, args: GensonArgs) {
        let result = ""
        args.forEach(value => {
            if (value instanceof GensonType) {
                let json = context.resolve(value)
                if (json instanceof Object) {
                    json = JSON.stringify(json)
                }
                result += json
            }

        })

        return new GensonString(result)
    }
}