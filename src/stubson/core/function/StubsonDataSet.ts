import StubsonContext from "../context/StubsonContext";
import {StubsonParserVisitor} from "./StubsonParserVisitor";
import StubsonArgs from "../args/StubsonArgs";
import StubsonPlaceholder from "../type/implementation/StubsonPlaceholder";

export abstract class StubsonDataSet extends StubsonParserVisitor {

    protected readonly schema: object

    constructor(json: object) {
        super()
        this.schema = json
    }

}

export class EnumStubsonDataSet extends StubsonDataSet {

    override execute(context: StubsonContext, args?: StubsonArgs): StubsonPlaceholder<any> {
        if (this.schema instanceof Array) {
            return new StubsonPlaceholder(this.schema)
        }
        return null
    }
}

export class CategoryStubsonDataSet extends StubsonDataSet {

    private readonly _category: string
    private readonly _defValue: string

    constructor(category: string, defValue: string, json: object) {
        super(json)
        this._category = category
        this._defValue = defValue
    }

    override execute(context: StubsonContext, args?: StubsonArgs): StubsonPlaceholder<any> {
        let value = args?.get(this._category)?.value() ?? this._defValue

        if (!this.schema[this._category]) {
            return null
        }

        let values = (this.schema[this._category][value])

        if (values instanceof Array) {
            return new StubsonPlaceholder<any>(values)
        }

        return null
    }

}