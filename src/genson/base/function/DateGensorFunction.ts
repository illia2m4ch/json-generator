import {GensonContext} from "../../core/context/GensonContext";
import {GensonArgs} from "../../core/args/GensonArgs";
import {GensonFunction} from "../../core/function/GensonFunction";
import {GensonNumber} from "../../core/type/implementation/GensonNumber";

export default class TimestampGensonFunction extends GensonFunction {
    override execute(context: GensonContext, args: GensonArgs) {
        return new GensonNumber(Date.now())
    }
}