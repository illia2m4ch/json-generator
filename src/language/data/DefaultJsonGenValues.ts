import {LocaleJsonGenDataSet} from "./JsonGenDataSet.ts";
import {JsonGenContext} from "./JsonGenContext.ts";
import nameJson from './name.json'
import {JsonGenBoolean, JsonGenNumber} from "../model/JsonGenNode";

export function defineDefaultDataSets(values: JsonGenContext) {
    // dataSets
    values.define('name', new LocaleJsonGenDataSet(nameJson))

    // values
    values.define('defArraySize', new JsonGenNumber(1))
    values.define('defOptional', new JsonGenBoolean(false))
}