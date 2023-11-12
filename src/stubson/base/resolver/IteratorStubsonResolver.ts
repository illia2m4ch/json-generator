import StubsonResolver from "../../core/resolver/StubsonResolver";
import StubsonContext from "../../core/context/StubsonContext";
import StubsonPlaceholder from "../../core/type/implementation/StubsonPlaceholder";
import StubsonArray from "../../core/type/implementation/StubsonArray";
import {StubsonObject} from "../../core/type/implementation/StubsonObject";
import StubsonValue from "../../core/type/implementation/StubsonValue";
import StubsonRange from "../../core/type/implementation/StubsonRange";
import StubsonType from "../../core/type/abstract/StubsonType";
import StubsonNode from "../../core/type/abstract/StubsonNode";

export default class IteratorStubsonResolver extends StubsonResolver {

    protected resolvePlaceholder(context: StubsonContext, type: StubsonPlaceholder<any>) {
        let result: any[] = []
        type.value().forEach(item => {
            if (item instanceof StubsonType) {
                let itemVariants = this.wrapResult(this.resolve(context, item))
                result.push(...itemVariants)
            } else {
                result.push(item)
            }
        })
        return result
    }

    protected resolveArray(context: StubsonContext, type: StubsonArray<any>) {
        return this.objectVariants(context, [...type.value().entries()]).map(value => Object.values(value))
    }

    protected resolveObject(context: StubsonContext, type: StubsonObject) {
        return this.objectVariants(context, [...type.value()])
    }

    protected resolveValue(context: StubsonContext, type: StubsonValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: StubsonContext, type: StubsonRange) {
        let result: number[] = []
        let step = type.argStep()
        for (let value = type.from; value <= type.to; value += step) {
            result.push(value)
        }
        return result
    }

    protected resolveOther(context: StubsonContext, type: StubsonType<any>) {
        return [type.value()]
    }

    protected objectVariants(context: StubsonContext, array: [number | StubsonNode<any>, StubsonNode<any>][]) {
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

    protected propertyVariants(context: StubsonContext, name: number | StubsonNode<any>, value: StubsonNode<any>): [string, any][] {
        let propertyVariants = this.wrapResult(this.resolve(context, value))
        let nameVariants: any[]

        if (typeof name === 'number') {
            nameVariants = [name]
        } else if (name instanceof StubsonNode) {
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