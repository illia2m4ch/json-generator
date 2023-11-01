import {CategoryJsonGenDataSet} from "./JsonGenDataSet.ts";
import {JsonGenContext} from "./JsonGenContext.ts";
import nameJson from './name.json'
import {JsonGenBoolean, JsonGenNumber} from "../model/JsonGenNode";
import {ShuffleJsonGenFunction, StringJsonGenFunction} from "./JsonGenFunction";

export function defineDefaultDataSets(values: JsonGenContext) {
    // dataSets
    values.define('name', new CategoryJsonGenDataSet('locale', 'ru', nameJson))

    // values
    values.define('defArraySize', new JsonGenNumber(0))
    values.define('defOptional', new JsonGenBoolean(false))

    // functions
    values.define('string', new StringJsonGenFunction())
    values.define('shuffle', new ShuffleJsonGenFunction())
}