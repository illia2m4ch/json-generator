export abstract class JsonGenDataSet {

    protected readonly json: object

    constructor(json: object) {
        this.json = json
    }

    abstract values(args: Map<string, any>): any[]

}

export class EnumJsonGenDataSet extends JsonGenDataSet {

    values(): any[] {
        if (this.json instanceof Array) {
            return this.json
        }
        return []
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

    values(args: Map<string, any>): any[] {
        let value = args?.get(this._category)?.value() ?? this._defValue

        if (!this.json[this._category]) {
            return []
        }

        let values = (this.json[this._category][value])

        if (values instanceof Array) {
            return values
        }

        return []
    }

}