export class JsonGenValue {

    private _identifier: string
    private _args: Map<string, any>

    constructor(identifier: string, args: Map<string, any>) {
        this._identifier = identifier
        this._args = args
    }

}