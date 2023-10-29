import {LocaleJsonGenDataSet} from "./JsonGenDataSet.ts";
import {JsonGenContext} from "./JsonGenContext.ts";
import nameJson from './name.json'

export function defineDefaultDataSets(values: JsonGenContext) {
    // dataSets
    values.define('name', new LocaleJsonGenDataSet(nameJson))

    // values
    values.define('defaultArraySize', 1)
    values.define('defaultOptional', false)
}