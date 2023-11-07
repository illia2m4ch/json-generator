import {GensonResolver} from "../../core/resolver/GensonResolver";
import {GensonArray} from "../../core/type/implementation/GensonArray";
import {GensonType} from "../../core/type/abstract/GensonType";
import {GensonPlaceholder} from "../../core/type/implementation/GensonPlaceholder";
import {GensonRange} from "../../core/type/implementation/GensonRange";
import {GensonValue} from "../../core/type/implementation/GensonValue";
import {GensonContext} from "../../core/context/GensonContext";
import {GensonNumber} from "../../core/type/implementation/GensonNumber";
import {GensonObject} from "../../core/type/implementation/GensonObject";
import {GensonNode} from "../../core/type/abstract/GensonNode";

export class RandomGensonResolver extends GensonResolver {

    protected resolvePlaceholder(context: GensonContext, type: GensonPlaceholder<any>) {
        let value = type.value()[this.randomNumber(0, type.value().length - 1)]

        if (value instanceof GensonType) {
            return this.resolve(context, value)
        }

        return value
    }

    protected resolveArray(context: GensonContext, type: GensonArray<any>) {
        let arr = type.value()
        let size = type.argSize(context)

        let staticSize = -1

        if (size instanceof GensonNumber) {
            staticSize = size.value()
        } else if (size instanceof GensonRange) {
            staticSize = this.randomNumber(size.from, size.to)
        }

        let array: GensonNode<any>[] = []

        if (staticSize < 0) {
            array = arr
        } else {
            for (let i = 0; i < staticSize; i++) {
                let item = arr[this.randomNumber(0, arr.length - 1)]
                array.push(item)
            }
        }

        return array.map((item, index) => {
            let itemContext = context.child(item)
            itemContext.define('index', new GensonNumber(index))
            return this.resolve(itemContext, item)
        })
    }

    protected resolveObject(context: GensonContext, type: GensonObject) {
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

    protected resolveValue(context: GensonContext, type: GensonValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: GensonContext, type: GensonRange) {
        let step = type.argStep()
        let stepCount = (type.to - type.from) / step
        console.log(step)
        console.log(stepCount)
        return type.from + step * this.randomNumber(0, stepCount)
    }

    protected resolveOther(context: GensonContext, type: GensonType<any>) {
        return type.value()
    }

    private randomNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

}