import {LocaleJsonGenDataSet} from "./JsonGenDataSet.ts";
import {JsonGenContext} from "./JsonGenContext.ts";
import nameJson from './name.json'

export function defineDefaultDataSets(values: JsonGenContext) {
    values.define('name', new LocaleJsonGenDataSet(nameJson))
}