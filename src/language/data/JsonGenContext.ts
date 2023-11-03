import {defineDefault} from "./DefaultJsonGenValues.ts";
import {JsonGenFunction} from "./JsonGenFunction";
import {JsonGenType} from "../model/JsonGenType";
import {JsonGenArgs} from "../model/JsonGenArgs";
import {JsonGenArray, JsonGenNode, JsonGenPlaceholder} from "../model/JsonGenNode";
import {JsonGenRange} from "../model/JsonGenRange";
import {JsonGenResolver, RandomJsonGenResolver} from "../model/JsonGenResolver";

export class JsonGenContext {

    private parent: JsonGenContext = null

    private values = new Map<string, JsonGenType>()
    private functions = new Map<string, JsonGenFunction>()

    private resolver: JsonGenResolver

    constructor(resolver?: JsonGenResolver) {
        defineDefault(this)
        this.resolver = resolver ?? new RandomJsonGenResolver()
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

        if (this.parent) {
            return this.parent.get(id, args)
        }

        return null
    }

    resolvePresent(node: JsonGenNode<any>): boolean {
        return !node.isOptional(this) || this.resolver.resolveBoolean()
    }

    resolveArray<Item>(array: JsonGenArray<Item>): JsonGenNode<Item>[] {
        return this.resolver.resolveItems(array.value(), array.attrSize(this))
    }

    resolvePlaceholder<Item>(placeholder: JsonGenPlaceholder<Item>): Item {
        return this.resolver.resolveItem(placeholder.value())
    }

    resolveRange(range: JsonGenRange): number {
        return this.resolver.resolveNumber(range.from, range.to)
    }

    child() {
        let child = new JsonGenContext()
        child.parent = this
        return child
    }

}