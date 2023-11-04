import {GensonContext} from "../../core/context/GensonContext";
import {GensonArgs} from "../../core/args/GensonArgs";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonPlaceholder} from "../../core/type/implementation/GensonPlaceholder";
import {GensonFunction} from "../../core/function/GensonFunction";

export class BooleanGensonFunction extends GensonFunction {
    execute(context: GensonContext, args: GensonArgs): GensonType<any> {
        return new GensonPlaceholder([true, false])
    }
}