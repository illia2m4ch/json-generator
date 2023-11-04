import {defineDefault} from "./DefaultJsonGenValues.ts";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenType} from "../model/JsonGenType";
import {JsonGenArgs} from "../model/JsonGenArgs";
import {
    DefaultJsonGenResolver,
    jsonGenResolver,
    JsonGenResolver,
    RandomJsonGenResolver
} from "../model/JsonGenResolver";
import {JsonGenNode} from "../model/JsonGenNode";

export class JsonGenContext {

    static readonly Root = new JsonGenContext()

    private _parent: JsonGenContext = null

    private values = new Map<string, JsonGenType>()
    private functions = new Map<string, JsonGenFunction>()

    private readonly _resolver: JsonGenResolver

    constructor(node?: JsonGenNode<any>) {
        defineDefault(this)
        node?.args?.forEach((v, k) => this.define(k, v))
        this._resolver = JsonGenResolver.create(this, node)
    }

    define(id: string, value: any) {
        if (value instanceof JsonGenFunction) {
            this.functions.set(id, value)
        } else {
            this.values.set(id, value)
        }
    }

    get(id: string, args?: JsonGenArgs): JsonGenType {

        if (this.values.has(id)) {
            return this.values.get(id)
        }

        if (this.functions.has(id)) {
            return this.functions.get(id).execute(this, args)
        }

        if (this._parent) {
            return this._parent.get(id, args)
        }

        return null
    }

    child(node?: JsonGenNode<any>) {
        let child = new JsonGenContext(node)
        child._parent = this
        return child
    }

    resolver(): JsonGenResolver {
        return this._resolver ?? jsonGenResolver(this._parent?._resolver)
    }

    parent() {
        return this._parent
    }

}