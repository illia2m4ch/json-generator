import {GensonResolver} from "../../core/resolver/GensonResolver";
import {GensonContext} from "../../core/context/GensonContext";
import {GensonPlaceholder} from "../../core/type/implementation/GensonPlaceholder";
import {GensonArray} from "../../core/type/implementation/GensonArray";
import {GensonObject} from "../../core/type/implementation/GensonObject";
import {GensonValue} from "../../core/type/implementation/GensonValue";
import {GensonRange} from "../../core/type/implementation/GensonRange";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonNode} from "../../core/type/abstract/GensonNode";

export class IteratorGensonResolver extends GensonResolver {

    protected resolvePlaceholder(context: GensonContext, type: GensonPlaceholder<any>) {
        let result: any[] = []
        type.value().forEach(item => {
            if (item instanceof GensonType) {
                let itemVariants = this.wrapResult(this.resolve(context, item))
                result.push(...itemVariants)
            } else {
                result.push(item)
            }
        })
        return result
    }

    protected resolveArray(context: GensonContext, type: GensonArray<any>) {
        return this.variants(context, [...type.value().entries()]).map(value => Object.values(value))
    }

    protected resolveObject(context: GensonContext, type: GensonObject) {
        return this.variants(context, [...type.value().entries()])
    }

    protected resolveValue(context: GensonContext, type: GensonValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: GensonContext, type: GensonRange) {
        let result: number[] = []
        for (let i = type.from; i <= type.to; i++) {
            result.push(i)
        }
        return result
    }

    protected resolveOther(context: GensonContext, type: GensonType<any>) {
        return [type.value()]
    }

    protected wrapResult(value: any) {
        if (value instanceof Array) {
            return value
        }
        return [value]
    }

    protected variants<K>(context: GensonContext, array: [K, GensonNode<any>][]) {
        let result = []
        let maxVariants = 1

        let variants: [K, any[]][] = array.map(([name, property]) => {
            let propertyVariants = this.wrapResult(this.resolve(context, property))
            if (propertyVariants.length > maxVariants) {
                maxVariants = propertyVariants.length
            }
            return [name, propertyVariants]
        })

        for (let i = 0; i < maxVariants; i++) {
            let object = {}
            variants.forEach(([name, variants]) => {
                object[name.toString()] = variants[i % variants.length]
            })
            result.push(object)
        }

        return result
    }

}