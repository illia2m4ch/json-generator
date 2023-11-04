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
        let size = type.attrSize(context)

        let staticSize = 1

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
        type.value().forEach((node, name) => {
            if (!node.isOptional(context) || (this.randomNumber(0, 1) === 1)) {
                object[name] = this.resolve(context, node)
            }
        })
        return object
    }

    protected resolveValue(context: GensonContext, type: GensonValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: GensonContext, type: GensonRange) {
        return this.randomNumber(type.from, type.to)
    }

    protected resolveOther(context: GensonContext, type: GensonType<any>) {
        return type.value()
    }

    private randomNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

}