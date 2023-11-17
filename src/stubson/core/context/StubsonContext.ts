import {StubsonFunction} from "../function/StubsonFunction";
import StubsonType from "../type/abstract/StubsonType";
import StubsonArgs from "../args/StubsonArgs";
import StubsonResolver from "../resolver/StubsonResolver";
import StubsonNode from "../type/abstract/StubsonNode";
import StubsonValue from "../type/implementation/StubsonValue";
import StubsonConfig from "../config/StubsonConfig";
import StubsonPostResolver from "../post/StubsonPostResolver";
import StubsonPostFunction from "../post/StubsonPostFunction";

export default class StubsonContext {

    static create(config: StubsonConfig) {
        let context = new StubsonContext(config, null, null)
        config.init(context)
        return context
    }

    private readonly _parent: StubsonContext = null

    private values = new Map<string, StubsonType<any>>()
    private functions = new Map<string, StubsonFunction>()
    private postFunctions = new Map<string, StubsonPostFunction>()

    private readonly _config: StubsonConfig
    private readonly _resolver: StubsonResolver

    protected constructor(config: StubsonConfig, parent?: StubsonContext, node?: StubsonNode<any>) {
        this._config = config
        this._parent = parent
        node?.args?.forEach((v, k) => this.define(k, v))
        this._resolver = config.createResolver(this) ?? parent?._resolver ?? config.defaultResolver(this)
    }

    define(id: string, value: any) {
        if (value instanceof StubsonPostFunction) {
            this.postFunctions.set(id, value)
        } else if (value instanceof StubsonFunction) {
            this.functions.set(id, value)
        } else {
            this.values.set(id, value)
        }
    }

    get(id: string, args?: StubsonArgs) {
        return this.getInternal(this, id, args)
    }

    private getInternal(caller: StubsonContext, id: string, args?: StubsonArgs): StubsonType<any> {
        if (this.values.has(id)) {
            let value = this.values.get(id)
            if (value instanceof StubsonValue) {
                return this.getInternal(caller, value.identifier, args?.isEmpty() ? value.args : args)
            }
            return value
        }

        if (this.postFunctions.has(id)) {
            let value = new StubsonValue(id, this.postFunctions.get(id))
            value.args = args
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

    child(node: StubsonNode<any>) {
        return new StubsonContext(this._config, this, node)
    }

    resolver(): StubsonResolver {
        return this._resolver
    }

    resolve(type: StubsonType<any>) {
        let json = this.resolver().resolve(this, type)
        return StubsonPostResolver.instance.resolve(json)
    }

    parent() {
        return this._parent
    }

}