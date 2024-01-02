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
        return [...new Set<any>(result)]
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

    protected nextVariant(indices: number[], sizes: number[]): number[] {
        let max = 0
        let indexOfMax = 0
        for (let i = 0; i < indices.length; i++) {
            let size = sizes[i]
            indices[i] = (indices[i] + 1) % size
            if (size > max) {
                max = size
                indexOfMax = i
            }
        }

        if (indices[indexOfMax] === 0) { // overflow
            return null // means end
        }

        return indices
    }

    private objectVariants(context: StubsonContext, array: [number | StubsonNode<any>, StubsonNode<any>][]) {
        let variants: [string, any][][] = array.map(([name, value]) => {
            return this.propertyVariants(context, name, value)
        })

        return this.resolveObjectVariants(variants)
    }

    private resolveObjectVariants(variants: [string, any][][]): any[] {
        let result = []
        let indices = new Array(variants.length).fill(0);
        let sizes = variants.map(value => value.length)

        while (indices) {
            let object = {}

            for (let i = 0; i < variants.length; i++) {
                let variantIndex = indices[i]
                let variant = variants[i][variantIndex]
                let name = variant[0]

                if (name) {
                    object[name] = variant[1]
                }
            }

            result.push(object)

            indices = this.nextVariant(indices, sizes)
        }

        return result
    }

    private propertyVariants(context: StubsonContext, name: number | StubsonNode<any>, value: StubsonNode<any>): [string, any][] {
        let valueVariants = this.wrapResult(this.resolve(context, value))
        let nameVariants: any[]

        let hasNullName = false
        if (typeof name === 'number') {
            nameVariants = [name]
        } else if (name instanceof StubsonNode) {
            nameVariants = this.wrapResult(this.resolve(context, name))
            hasNullName = nameVariants.includes(null)
            nameVariants = nameVariants.filter(value => value)
        }

        let result: [string, any][] = []
        let indices = new Array(2).fill(0); // [name, value] indices
        let sizes = [nameVariants.length, valueVariants.length]

        while (indices) {
            let [nameIndex, valueIndex] = indices

            let name = nameVariants[nameIndex]
            let stringName = name instanceof Object ? JSON.stringify(name) : name?.toString() ?? null
            let value = valueVariants[valueIndex]
            result.push([stringName, value])

            indices = this.nextVariant(indices, sizes)
        }

        if (hasNullName) {
            result.push([null, null])
        }

        return result
    }

    private wrapResult(value: any): any[] {
        if (value instanceof Array) {
            return value
        }
        return [value]
    }

}