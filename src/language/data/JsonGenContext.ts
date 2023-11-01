import {JsonGenDataSet} from "./JsonGenDataSet.ts";
import {defineDefaultDataSets} from "./DefaultJsonGenValues.ts";
import {JsonGenNode} from "../model/JsonGenNode";
import {JsonGenFunction} from "./JsonGenFunction";

export class JsonGenContext {

    private dataSets = new Map<string, JsonGenDataSet>()
    private values = new Map<string, any>()
    private functions = new Map<string, JsonGenFunction>()

    constructor() {
        defineDefaultDataSets(this)
    }

    define(identificator: string, value: any) {
        if (value instanceof JsonGenDataSet) {
            this.dataSets.set(identificator, value)
        } else if (value instanceof JsonGenFunction) {
            this.functions.set(identificator, value)
        } else {
            this.values.set(identificator, value)
        }
    }

    get(identificator: string, args?: Map<string, any>): any {

        if (this.values.has(identificator)) {
            return this.values.get(identificator)
        }

        if (this.functions.has(identificator)) {
            return this.functions.get(identificator).execute(this, args)
        }

        if (this.dataSets.has(identificator)) {
            return this.dataSets.get(identificator).values(args)
        }

        return null
    }

    copy() { // переделать в систему child / parent чтобы не дублировать каждый раз
        let copy = new JsonGenContext()
        copy.dataSets = new Map(this.dataSets)
        copy.values = new Map(this.values)
        copy.functions = new Map(this.functions)
        return copy
    }

}