import {GensonContext} from "../context/GensonContext";
import {GensonType} from "../type/abstract/GensonType";
import {GensonArgs} from "../args/GensonArgs";

export abstract class GensonFunction {
    abstract execute(context: GensonContext, args: GensonArgs): GensonType<any>
}