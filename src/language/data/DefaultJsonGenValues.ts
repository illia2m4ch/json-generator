import {CategoryJsonGenDataSet} from "./JsonGenDataSet.ts";
import {JsonGenContext} from "./JsonGenContext.ts";
import nameJson from './name.json'
import {JsonGenBoolean, JsonGenNumber} from "../model/JsonGenNode";
import {BooleanJsonGenFunction, ShuffleJsonGenFunction, StringJsonGenFunction} from "./JsonGenFunction";

export function defineDefault(context: JsonGenContext) {
    // values
    context.define('defArraySize', new JsonGenNumber(-1))
    context.define('defOptional', new JsonGenBoolean(false))

    // dataSets
    context.define('name', new CategoryJsonGenDataSet('locale', 'ru', nameJson))

    // functions
    context.define('string', new StringJsonGenFunction())
    context.define('shuffle', new ShuffleJsonGenFunction())
    context.define('boolean', new BooleanJsonGenFunction())
}