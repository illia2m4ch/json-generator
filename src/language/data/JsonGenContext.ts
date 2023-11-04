import {defineDefault} from "./DefaultJsonGenValues";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenType} from "../model/JsonGenType";
import {JsonGenArgs} from "../model/JsonGenArgs";
import {jsonGenResolver, JsonGenResolver} from "../model/JsonGenResolver";
import {JsonGenNode} from "../model/JsonGenNode";
import {JsonGenValue} from "../model/JsonGenValue";

export class JsonGenContext {

    private static createRoot() {
        let root = new JsonGenContext()
        defineDefault(root)
        return root
    }

    static readonly Root = JsonGenContext.createRoot()

    private _parent: JsonGenContext = null

    private values = new Map<string, JsonGenType>()
    private functions = new Map<string, JsonGenFunction>()

    private readonly _resolver: JsonGenResolver

    constructor(node?: JsonGenNode<any>) {
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
            let value = this.values.get(id)
            if (value instanceof JsonGenValue) {
                return this.get(value.identifier, args.isEmpty() ? value.args : args)
            }
            return value
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