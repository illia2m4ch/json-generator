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
        return this.objectVariants(context, [...type.value().entries()]).map(value => Object.values(value))
    }

    protected resolveObject(context: GensonContext, type: GensonObject) {
        return this.objectVariants(context, [...type.value()])
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

    protected objectVariants(context: GensonContext, array: [number | GensonNode<any>, GensonNode<any>][]) {
        let result = []
        let maxVariants = 1
        let variants: [string, any][][] = array.map(([name, value]) => {
            let propertyVariants = this.propertyVariants(context, name, value)
            if (propertyVariants.length > maxVariants) {
                maxVariants = propertyVariants.length
            }
            return this.propertyVariants(context, name, value)
        })

        for (let i = 0; i < maxVariants; i++) {
            let object = {}

            variants.forEach((propertyVariants) => {
                let variant = propertyVariants[i % propertyVariants.length]
                object[variant[0]] = variant[1]
            })

            result.push(object)
        }

        return result
    }

    protected propertyVariants(context: GensonContext, name: number | GensonNode<any>, value: GensonNode<any>): [string, any][] {
        let propertyVariants = this.wrapResult(this.resolve(context, value))
        let nameVariants: any[]

        if (typeof name === 'number') {
            nameVariants = [name]
        } else if (name instanceof GensonNode) {
            nameVariants = this.wrapResult(this.resolve(context, name))
        }

        let result: [string, any][] = []
        nameVariants.forEach(name => {
            let stringName = name instanceof Object ? JSON.stringify(name) : name.toString()
            propertyVariants.forEach(value => {
                result.push([stringName, value])
            })
        })

        return result
    }

    protected wrapResult(value: any): any[] {
        if (value instanceof Array) {
            return value
        }
        return [value]
    }

}