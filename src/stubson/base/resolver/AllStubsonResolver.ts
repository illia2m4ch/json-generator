import StubsonContext from "../../core/context/StubsonContext";
import StubsonArray from "../../core/type/implementation/StubsonArray";
import StubsonType from "../../core/type/abstract/StubsonType";
import {StubsonObject} from "../../core/type/implementation/StubsonObject";
import StubsonNodeWrapper from "../../core/type/implementation/StubsonNodeWrapper";
import IteratorStubsonResolver from "./IteratorStubsonResolver";

export default class AllStubsonResolver extends IteratorStubsonResolver {

    protected resolveArray(context: StubsonContext, type: StubsonArray<any>) {
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
                items[index] = new StubsonNodeWrapper(itemVariant)
                let copy = new StubsonArray(items)
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

    protected resolveObject(context: StubsonContext, type: StubsonObject) {
        let result = []

        for (const [name, property] of type.value()) {
            if (property.isPrimitive()) {
                continue
            }

            let propertyVariants = this.wrapResult(this.resolve(context, property))
            let objectVariants = propertyVariants.map(propertyVariant => {
                let properties = new Map(type.value())
                properties.set(name, new StubsonNodeWrapper(propertyVariant))
                let copy = new StubsonObject(properties)
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

    protected resolveOther(context: StubsonContext, type: StubsonType<any>) {
        return type.value()
    }

}