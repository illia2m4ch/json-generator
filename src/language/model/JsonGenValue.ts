export class JsonGenValue {

    readonly identifier: string
    readonly args: Map<string, any>

    constructor(identifier: string, args?: Map<string, any>) {
        this.identifier = identifier
        this.args = args ? args : new Map<string, any>()
    }

}