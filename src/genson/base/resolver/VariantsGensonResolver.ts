import {GensonContext} from "../../core/context/GensonContext";
import {GensonArray} from "../../core/type/implementation/GensonArray";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonRange} from "../../core/type/implementation/GensonRange";
import {GensonPlaceholder} from "../../core/type/implementation/GensonPlaceholder";
import {GensonObject} from "../../core/type/implementation/GensonObject";
import {GensonResolver} from "../../core/resolver/GensonResolver";
import { GensonValue } from "../../core/type/implementation/GensonValue";
import {GensonNodeWrapper} from "../../core/type/implementation/GensonNodeWrapper";

export class VariantsGensonResolver extends GensonResolver {

    protected resolvePlaceholder(context: GensonContext, type: GensonPlaceholder<any>) {
        let result: any[] = []
        type.value().forEach(item => {
            if (item instanceof GensonType) {
                let itemVariants = this.makeArray(this.resolve(context, item))
                result.push(...itemVariants)
            } else {
                result.push(item)
            }
        })
        return result
    }

    protected resolveArray(context: GensonContext, type: GensonArray<any>) {
        let result = []

        let index = 0
        for (const value of type.value()) {
            if (value.isPrimitive()) {
                index++
                continue
            }

            let itemVariants = this.makeArray(this.resolve(context, value))
            let arrayVariants = itemVariants.map(itemVariant => {
                let items = [...type.value()]
                items[index] = new GensonNodeWrapper(itemVariant)
                // TODO set args
                return this.makeArray(this.resolve(context, new GensonArray(items)))
            })

            arrayVariants.forEach(value => {
                result.push(...value)
            })

            return result
        }

        let array = []

        type.value().forEach(item => {
            array.push(this.resolve(context, item))
        })

        result.push(array)

        return result
    }

    protected resolveObject(context: GensonContext, type: GensonObject) {
        let result = []

        for (const [key, value] of type.value()) {
            if (value.isPrimitive()) {
                continue
            }

            let propertyVariants = this.makeArray(this.resolve(context, value))
            let objectVariants = propertyVariants.map(propertyVariant => {
                let properties = new Map(type.value())
                properties.set(key, new GensonNodeWrapper(propertyVariant))
                // TODO set args
                return this.makeArray(this.resolve(context, new GensonObject(properties)))
            })

            objectVariants.forEach(value => {
                result.push(...value)
            })

            return result
        }

        let object = {}
        type.value().forEach((v, k) => {
            object[k] = this.resolve(context, v)
        })

        result.push(object)

        return result
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
        return type.value()
    }

    private makeArray(value: any) {
        if (value instanceof Array) {
            return value
        }
        return [value]
    }

}