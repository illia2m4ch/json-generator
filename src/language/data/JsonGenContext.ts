import {JsonGenDataSet} from "./JsonGenDataSet.ts";
import {defineDefaultDataSets} from "./DefaultJsonGenValues.ts";
import {JsonGenNode} from "../model/JsonGenNode";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenType} from "../model/JsonGenType";

export class JsonGenContext {

    private parent: JsonGenContext = null

    private dataSets = new Map<string, JsonGenDataSet>()
    private values = new Map<string, JsonGenType>()
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
            return this.dataSets.get(identificator).json(this, args)
        }

        if (this.parent) {
            return this.parent.get(identificator, args)
        }

        return null
    }

    child() {
        let child = new JsonGenContext()
        child.parent = this
        return child
    }

}