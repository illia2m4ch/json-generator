import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenArray} from "../../core/type/implementation/JsonGenArray";
import {JsonGenType} from "../../core/type/abstract/JsonGenType";
import {JsonGenRange} from "../../core/type/implementation/JsonGenRange";
import {JsonGenPlaceholder} from "../../core/type/implementation/JsonGenPlaceholder";
import {JsonGenObject} from "../../core/type/implementation/JsonGenObject";
import {JsonGenResolver} from "../../core/resolver/JsonGenResolver";
import { JsonGenValue } from "../../core/type/implementation/JsonGenValue";
import {JsonGenWrapper} from "../../core/type/implementation/JsonGenWrapper";

export class VariantsJsonGenResolver extends JsonGenResolver {

    protected resolvePlaceholder(context: JsonGenContext, type: JsonGenPlaceholder<any>) {
        let result: any[] = []
        type.value().forEach(item => {
            if (item instanceof JsonGenType) {
                let itemVariants = this.makeArray(this.resolve(context, item))
                result.push(...itemVariants)
            } else {
                result.push(item)
            }
        })
        return result
    }

    protected resolveArray(context: JsonGenContext, type: JsonGenArray<any>) {
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
                items[index] = new JsonGenWrapper(itemVariant)
                // TODO set args
                return this.makeArray(this.resolve(context, new JsonGenArray(items)))
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

    protected resolveObject(context: JsonGenContext, type: JsonGenObject) {
        let result = []

        for (const [key, value] of type.value()) {
            if (value.isPrimitive()) {
                continue
            }

            let propertyVariants = this.makeArray(this.resolve(context, value))
            let objectVariants = propertyVariants.map(propertyVariant => {
                let properties = new Map(type.value())
                properties.set(key, new JsonGenWrapper(propertyVariant))
                // TODO set args
                return this.makeArray(this.resolve(context, new JsonGenObject(properties)))
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

    protected resolveValue(context: JsonGenContext, type: JsonGenValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: JsonGenContext, type: JsonGenRange) {
        let result: number[] = []
        for (let i = type.from; i <= type.to; i++) {
            result.push(i)
        }
        return result
    }

    protected resolveOther(context: JsonGenContext, type: JsonGenType<any>) {
        return type.value()
    }

    private makeArray(value: any) {
        if (value instanceof Array) {
            return value
        }
        return [value]
    }

}