import {GensonContext} from "../../core/context/GensonContext";
import {GensonArray} from "../../core/type/implementation/GensonArray";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonRange} from "../../core/type/implementation/GensonRange";
import {GensonPlaceholder} from "../../core/type/implementation/GensonPlaceholder";
import {GensonObject} from "../../core/type/implementation/GensonObject";
import {GensonResolver} from "../../core/resolver/GensonResolver";
import { GensonValue } from "../../core/type/implementation/GensonValue";
import {GensonNodeWrapper} from "../../core/type/implementation/GensonNodeWrapper";
import {IteratorGensonResolver} from "./IteratorGensonResolver";
import {GensonNode} from "../../core/type/abstract/GensonNode";

export class VariantsGensonResolver extends IteratorGensonResolver {

    protected resolveArray(context: GensonContext, type: GensonArray<any>) {
        let result = []

        let index = 0
        for (const value of type.value()) {
            if (value.isPrimitive()) {
                index++
                continue
            }

            let itemVariants = this.wrapResult(this.resolve(context, value))
            let arrayVariants = itemVariants.map(itemVariant => {
                let items = [...type.value()]
                items[index] = new GensonNodeWrapper(itemVariant)
                let copy = new GensonArray(items)
                copy.args = type.args
                return this.wrapResult(this.resolve(context, copy))
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

        for (const [name, property] of type.value()) {
            if (property.isPrimitive()) {
                continue
            }

            let propertyVariants = this.wrapResult(this.resolve(context, property))
            let objectVariants = propertyVariants.map(propertyVariant => {
                let properties = new Map(type.value())
                properties.set(name, new GensonNodeWrapper(propertyVariant))
                let copy = new GensonObject(properties)
                copy.args = type.args
                return this.wrapResult(this.resolve(context, copy))
            })

            objectVariants.forEach(value => {
                result.push(...value)
            })

            return result
        }

        let object = {}
        type.value().forEach((v, k) => {
            object[k.toString()] = this.resolve(context, v) // TODO обрабатывать динамические ключи
        })

        result.push(object)

        return result
    }

    protected resolveOther(context: GensonContext, type: GensonType<any>) {
        return type.value()
    }

}