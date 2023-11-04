import {JsonGenArray, JsonGenNode, JsonGenNumber, JsonGenObject, JsonGenPlaceholder} from "./JsonGenNode";
import {JsonGenRange} from "./JsonGenRange";
import {JsonGenValue} from "./JsonGenValue";
import {JsonGenContext} from "../data/JsonGenContext";
import {JsonGenType} from "./JsonGenType";

export abstract class JsonGenResolver {

    static create(context: JsonGenContext, node: JsonGenNode<any>) {
        let arg = context.get('resolver')
        if (arg == null || !(arg instanceof JsonGenValue)) {
            return null
        }

        switch ((arg as JsonGenValue).identifier) {
            case 'random': return new RandomJsonGenResolver()
            case 'iterator': return new IteratorJsonGenResolver(context) // only for array
        }
    }

    resolveItem<T>(arr: T[]): T {
        if (arr == null || arr.length === 0) {
            return null
        }
        return arr[this.resolveNumber(0, arr.length - 1)]
    }

    resolveArray(arrayContext: JsonGenContext, node: JsonGenArray<any>): JsonGenNode<any>[] {
        let arr = node.value()
        let size = node.attrSize(arrayContext)

        let staticSize = 1

        if (size instanceof JsonGenNumber) {
            staticSize = size.value()
        } else if (size instanceof JsonGenRange) {
            staticSize = this.resolveNumber(size.from, size.to)
        }

        if (staticSize === -1) {
            return arr
        }

        let array = []

        for (let i = 0; i < staticSize; i++) {
            array.push(this.resolveItem(arr))
        }

        return array
    }

    resolveBoolean(): boolean {
        return this.resolveNumber(0, 1) === 1
    }

    abstract resolveNumber(from: number, to: number): number
}

export class RandomJsonGenResolver extends JsonGenResolver {
    resolveNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }
}

export class IteratorJsonGenResolver extends JsonGenResolver {

    private readonly context: JsonGenContext

    constructor(context: JsonGenContext) {
        super();
        this.context = context
    }

    resolveArray(arrayContext: JsonGenContext, node: JsonGenArray<any>): JsonGenNode<any>[] {
        let arr = node.value()

        if (arr.length === 0) {
            return []
        }

        let array = []
        let item = arr[0]

        let variants = this.nodeVariants(item)
        array.push(...variants)

        return array
    }

    resolveNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

    private nodeVariants(type: JsonGenType): JsonGenNode<any>[] {
        let result = []

        if (type instanceof JsonGenNode && type.isStatic()) {
            result.push(type)
            return result
        }

        if (type instanceof JsonGenRange) {
            for (let i = type.from; i <= type.to; i++) {
                result.push(new JsonGenNumber(i))
            }
            return result
        }

        if (type instanceof JsonGenPlaceholder) {
            type.value().forEach(item => {
                let itemVariants = this.nodeVariants(item)
                result.push(...itemVariants)
            })
            return result
        }

        if (type instanceof JsonGenArray) {
            type.value().forEach(item => {
                let itemVariants = this.nodeVariants(item)
                itemVariants.forEach(itemVariant => {
                    result.push(new JsonGenArray([itemVariant])) // TODO set args
                })
            })
            return result
        }

        if (type instanceof JsonGenObject) {
            if (type.isStatic()) {
                result.push(type)
                return result
            }

            for (const [key, value] of type.value()) {
                if (value.isStatic()) {
                    continue
                }

                let propertyVariants = this.nodeVariants(value)
                let objectVariants = propertyVariants.map(propertyVariant => {
                    let properties = new Map(type.value())
                    properties.set(key, propertyVariant)
                    // TODO set args
                    return this.nodeVariants(new JsonGenObject(properties)) as JsonGenObject[]
                })

                objectVariants.forEach(value => {
                    result.push(...value)
                })

                return result
            }
        }

        result.push(type)

        return result
    }

}

export let DefaultJsonGenResolver = new RandomJsonGenResolver()

export function jsonGenResolver(parent?: JsonGenResolver) {
    if (parent == null) {
        return DefaultJsonGenResolver
    }

    return parent
}