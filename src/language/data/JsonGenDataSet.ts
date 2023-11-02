import {JsonGenContext} from "./JsonGenContext";
import {JsonGenPlaceholder} from "../model/JsonGenNode";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenArgs} from "../model/JsonGenArgs";

export abstract class JsonGenDataSet extends JsonGenFunction {

    protected readonly schema: object

    constructor(json: object) {
        super()
        this.schema = json
    }

}

export class EnumJsonGenDataSet extends JsonGenDataSet {

    override execute(context: JsonGenContext, args?: JsonGenArgs): JsonGenPlaceholder<any> {
        if (this.schema instanceof Array) {
            return new JsonGenPlaceholder(this.schema)
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

    override execute(context: JsonGenContext, args?: JsonGenArgs): JsonGenPlaceholder<any> {
        let value = args?.get(this._category)?.value() ?? this._defValue

        if (!this.schema[this._category]) {
            return null
        }

        let values = (this.schema[this._category][value])

        if (values instanceof Array) {
            return new JsonGenPlaceholder<any>(values)
        }

        return null
    }

}