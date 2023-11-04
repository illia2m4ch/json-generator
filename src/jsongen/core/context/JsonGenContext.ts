import {JsonGenFunction} from "../function/JsonGenFunction";
import {JsonGenType} from "../type/abstract/JsonGenType";
import {JsonGenArgs} from "../args/JsonGenArgs";
import {JsonGenResolver} from "../resolver/JsonGenResolver";
import {JsonGenNode} from "../type/abstract/JsonGenNode";
import {JsonGenValue} from "../type/implementation/JsonGenValue";
import {JsonGenConfig} from "../config/JsonGenConfig";

export class JsonGenContext {

    static create(config: JsonGenConfig) {
        let context = new JsonGenContext(config, null, null)
        config.init(context)
        return context
    }

    private readonly _parent: JsonGenContext = null

    private values = new Map<string, JsonGenType<any>>()
    private functions = new Map<string, JsonGenFunction>()

    private readonly _config: JsonGenConfig
    private readonly _resolver: JsonGenResolver

    protected constructor(config: JsonGenConfig, parent?: JsonGenContext, node?: JsonGenNode<any>) {
        this._config = config
        this._parent = parent
        node?.args?.forEach((v, k) => this.define(k, v))
        this._resolver = config.createResolver(this) ?? parent?._resolver ?? config.defaultResolver(this)
    }

    define(id: string, value: any) {
        if (value instanceof JsonGenFunction) {
            this.functions.set(id, value)
        } else {
            this.values.set(id, value)
        }
    }

    get(id: string, args?: JsonGenArgs): JsonGenType<any> {
        if (this.values.has(id)) {
            let value = this.values.get(id)
            if (value instanceof JsonGenValue) {
                return this.get(value.identifier, args?.isEmpty() ? value.args : args)
            }
            return value
        }

        if (this.functions.has(id)) {
            return this.functions.get(id).execute(this, args)
        }

        if (this.parent()) {
            return this._parent.get(id, args)
        }

        return null
    }

    child(node: JsonGenNode<any>) {
        return new JsonGenContext(this._config, this, node)
    }

    resolver(): JsonGenResolver {
        return this._resolver
    }

    resolve(type: JsonGenType<any>) {
        return this.resolver().resolve(this, type)
    }

    parent() {
        return this._parent
    }

}