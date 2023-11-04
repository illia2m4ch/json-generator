import {JsonGenResolver} from "../../core/resolver/JsonGenResolver";
import {JsonGenArray} from "../../core/type/implementation/JsonGenArray";
import {JsonGenType} from "../../core/type/abstract/JsonGenType";
import {JsonGenPlaceholder} from "../../core/type/implementation/JsonGenPlaceholder";
import {JsonGenRange} from "../../core/type/implementation/JsonGenRange";
import {JsonGenValue} from "../../core/type/implementation/JsonGenValue";
import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenNumber} from "../../core/type/implementation/JsonGenNumber";
import {JsonGenObject} from "../../core/type/implementation/JsonGenObject";
import {JsonGenNode} from "../../core/type/abstract/JsonGenNode";

export class RandomJsonGenResolver extends JsonGenResolver {

    protected resolvePlaceholder(context: JsonGenContext, type: JsonGenPlaceholder<any>) {
        let value = type.value()[this.randomNumber(0, type.value().length - 1)]

        if (value instanceof JsonGenType) {
            return this.resolve(context, value)
        }

        return value
    }

    protected resolveArray(context: JsonGenContext, type: JsonGenArray<any>) {
        let arr = type.value()
        let size = type.attrSize(context)

        let staticSize = 1

        if (size instanceof JsonGenNumber) {
            staticSize = size.value()
        } else if (size instanceof JsonGenRange) {
            staticSize = this.randomNumber(size.from, size.to)
        }

        let array: JsonGenNode<any>[] = []

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
            itemContext.define('index', new JsonGenNumber(index))
            return this.resolve(itemContext, item)
        })
    }

    protected resolveObject(context: JsonGenContext, type: JsonGenObject) {
        let object = {}
        type.value().forEach((node, name) => {
            if (!node.isOptional(context) || (this.randomNumber(0, 1) === 1)) {
                object[name] = this.resolve(context, node)
            }
        })
        return object
    }

    protected resolveValue(context: JsonGenContext, type: JsonGenValue) {
        return this.resolve(context, context.get(type.identifier, type.args))
    }

    protected resolveRange(context: JsonGenContext, type: JsonGenRange) {
        return this.randomNumber(type.from, type.to)
    }

    protected resolveOther(context: JsonGenContext, type: JsonGenType<any>) {
        return type.value()
    }

    private randomNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

}