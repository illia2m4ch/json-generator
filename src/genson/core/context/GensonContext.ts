import {GensonFunction} from "../function/GensonFunction";
import {GensonType} from "../type/abstract/GensonType";
import {GensonArgs} from "../args/GensonArgs";
import {GensonResolver} from "../resolver/GensonResolver";
import {GensonNode} from "../type/abstract/GensonNode";
import {GensonValue} from "../type/implementation/GensonValue";
import {GensonConfig} from "../config/GensonConfig";

export class GensonContext {

    static create(config: GensonConfig) {
        let context = new GensonContext(config, null, null)
        config.init(context)
        return context
    }

    private readonly _parent: GensonContext = null

    private values = new Map<string, GensonType<any>>()
    private functions = new Map<string, GensonFunction>()

    private readonly _config: GensonConfig
    private readonly _resolver: GensonResolver

    protected constructor(config: GensonConfig, parent?: GensonContext, node?: GensonNode<any>) {
        this._config = config
        this._parent = parent
        node?.args?.forEach((v, k) => this.define(k, v))
        this._resolver = config.createResolver(this) ?? parent?._resolver ?? config.defaultResolver(this)
    }

    define(id: string, value: any) {
        if (value instanceof GensonFunction) {
            this.functions.set(id, value)
        } else {
            this.values.set(id, value)
        }
    }

    get(id: string, args?: GensonArgs) {
        return this.getInternal(this, id, args)
    }

    private getInternal(caller: GensonContext, id: string, args?: GensonArgs): GensonType<any> {
        if (this.values.has(id)) {
            let value = this.values.get(id)
            if (value instanceof GensonValue) {
                return this.getInternal(caller, value.identifier, args?.isEmpty() ? value.args : args)
            }
            return value
        }

        if (this.functions.has(id)) {
            return this.functions.get(id).execute(caller, args)
        }

        if (this.parent()) {
            return this.parent().getInternal(caller, id, args)
        }

        return null
    }

    child(node: GensonNode<any>) {
        return new GensonContext(this._config, this, node)
    }

    resolver(): GensonResolver {
        return this._resolver
    }

    resolve(type: GensonType<any>) {
        return this.resolver().resolve(this, type)
    }

    parent() {
        return this._parent
    }

}