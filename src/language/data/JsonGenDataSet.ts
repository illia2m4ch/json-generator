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

export class LocaleJsonGenDataSet extends JsonGenDataSet {
    values(args: Map<string, any>): any[] {
        let locale = args?.get("locale")?.value() ?? "ru"
        let values = (this.json["locale"] as Array<any>).find(v => v["code"] === locale)
        if (!values) {
            return []
        }
        return values["values"]
    }
}