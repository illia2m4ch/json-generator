import {JsonGenDataSet} from "./JsonGenDataSet.ts";
import {defineDefaultDataSets} from "./DefaultJsonGenValues.ts";

export class JsonGenContext {

    private dataSets = new Map<string, JsonGenDataSet>()

    constructor() {
        defineDefaultDataSets(this)
    }

    define(identificator: string, dataSet: JsonGenDataSet) {
        this.dataSets.set(identificator, dataSet)
    }

    dataSet(identificator: string): JsonGenDataSet {
        return this.dataSets.get(identificator)
    }

}