import {defineDefault} from "./DefaultJsonGenValues.ts";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenType} from "../model/JsonGenType";

export class JsonGenContext {

    private parent: JsonGenContext = null

    private values = new Map<string, JsonGenType>()
    private functions = new Map<string, JsonGenFunction>()

    constructor() {
        defineDefault(this)
    }

    define(id: string, value: any) {
        if (value instanceof JsonGenFunction) {
            this.functions.set(id, value)
        } else {
            this.values.set(id, value)
        }
    }

    get(id: string, args?: Map<string, any>): JsonGenType {

        if (this.values.has(id)) {
            return this.values.get(id)
        }

        if (this.functions.has(id)) {
            return this.functions.get(id).execute(this, args)
        }

        if (this.parent) {
            return this.parent.get(id, args)
        }

        return null
    }

    child() {
        let child = new JsonGenContext()
        child.parent = this
        return child
    }

}