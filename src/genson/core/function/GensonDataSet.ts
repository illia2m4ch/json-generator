import {GensonContext} from "../context/GensonContext";
import {GensonFunction} from "./GensonFunction";
import {GensonArgs} from "../args/GensonArgs";

import {GensonPlaceholder} from "../type/implementation/GensonPlaceholder";

export abstract class GensonDataSet extends GensonFunction {

    protected readonly schema: object

    constructor(json: object) {
        super()
        this.schema = json
    }

}

export class EnumGensonDataSet extends GensonDataSet {

    override execute(context: GensonContext, args?: GensonArgs): GensonPlaceholder<any> {
        if (this.schema instanceof Array) {
            return new GensonPlaceholder(this.schema)
        }
        return null
    }
}

export class CategoryGensonDataSet extends GensonDataSet {

    private readonly _category: string
    private readonly _defValue: string

    constructor(category: string, defValue: string, json: object) {
        super(json)
        this._category = category
        this._defValue = defValue
    }

    override execute(context: GensonContext, args?: GensonArgs): GensonPlaceholder<any> {
        let value = args?.get(this._category)?.value() ?? this._defValue

        if (!this.schema[this._category]) {
            return null
        }

        let values = (this.schema[this._category][value])

        if (values instanceof Array) {
            return new GensonPlaceholder<any>(values)
        }

        return null
    }

}