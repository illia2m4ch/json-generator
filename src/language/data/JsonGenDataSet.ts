import {JsonGenType} from "../model/JsonGenType";
import {JsonGenContext} from "./JsonGenContext";
import {JsonGenRandom} from "../model/JsonGenRandom";

export abstract class JsonGenDataSet extends JsonGenType {

    protected readonly schema: object

    constructor(json: object) {
        super()
        this.schema = json
    }

    abstract json(context: JsonGenContext, args?: Map<string, any>)

}

export class EnumJsonGenDataSet extends JsonGenDataSet {
    json(context: JsonGenContext): any {
        if (this.schema instanceof Array) {
            return JsonGenRandom.item(this.schema)
        }
        return null
    }
}

export class CategoryJsonGenDataSet extends JsonGenDataSet {

    private readonly _category: string
    private readonly _defValue: string

    constructor(category: string, defValue: string, json: object) {
        super(json)
        this._category = category
        this._defValue = defValue
    }

    json(context: JsonGenContext, args?: Map<string, any>): any {
        let value = args?.get(this._category)?.value() ?? this._defValue

        if (!this.schema[this._category]) {
            return null
        }

        let values = (this.schema[this._category][value])

        if (values instanceof Array) {
            return JsonGenRandom.item(values)
        }

        return null
    }

}