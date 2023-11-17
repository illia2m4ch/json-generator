import StubsonResolver from "../../core/resolver/StubsonResolver";
import StubsonArray from "../../core/type/implementation/StubsonArray";
import StubsonType from "../../core/type/abstract/StubsonType";
import StubsonPlaceholder from "../../core/type/implementation/StubsonPlaceholder";
import StubsonRange from "../../core/type/implementation/StubsonRange";
import StubsonValue from "../../core/type/implementation/StubsonValue";
import StubsonContext from "../../core/context/StubsonContext";
import StubsonNumber from "../../core/type/implementation/StubsonNumber";
import {StubsonObject} from "../../core/type/implementation/StubsonObject";
import StubsonNode from "../../core/type/abstract/StubsonNode";

export default class RandomStubsonResolver extends StubsonResolver {

    protected resolvePlaceholder(context: StubsonContext, type: StubsonPlaceholder<any>) {
        let value = type.value()[this.randomNumber(0, type.value().length - 1)]

        if (value instanceof StubsonType) {
            return this.resolve(context, value)
        }

        return value
    }

    protected resolveArray(context: StubsonContext, type: StubsonArray<any>) {
        let arr = type.value()
        let size = type.argSize(context)

        let staticSize = -1

        if (size instanceof StubsonNumber) {
            staticSize = size.value()
        } else if (size instanceof StubsonRange) {
            staticSize = this.randomNumber(size.from, size.to)
        }

        let array: StubsonNode<any>[] = []

        if (staticSize < 0) {
            array = arr
        } else {
            for (let i = 0; i < staticSize; i++) {
                let item = arr[this.randomNumber(0, arr.length - 1)]
                array.push(item)
            }
        }

        return array.map(item => this.resolve(context, item))
    }

    protected resolveObject(context: StubsonContext, type: StubsonObject) {
        let object = {}
        type.value().forEach((node, nameNode) => {
            let name = this.resolve(context, nameNode)
            if (name !== null) {
                let stringName = name instanceof Object ? JSON.stringify(name) : name
                object[stringName] = this.resolve(context, node)
            }
        })
        return object
    }

    protected resolveValue(context: StubsonContext, type: StubsonValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: StubsonContext, type: StubsonRange) {
        let step = type.argStep()
        let stepCount = (type.to - type.from) / step
        return type.from + step * this.randomNumber(0, stepCount)
    }

    protected resolveOther(context: StubsonContext, type: StubsonType<any>) {
        return type.value()
    }

    private randomNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

}