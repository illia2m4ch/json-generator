import {GensonRange} from "../type/implementation/GensonRange";
import {GensonContext} from "../context/GensonContext";
import {GensonType} from "../type/abstract/GensonType";
import {GensonObject} from "../type/implementation/GensonObject";
import {GensonArray} from "../type/implementation/GensonArray";
import {GensonPlaceholder} from "../type/implementation/GensonPlaceholder";
import {GensonValue} from "../type/implementation/GensonValue";

export abstract class GensonResolver {

    resolve(context: GensonContext, type: GensonType<any>) {
        if (type instanceof GensonPlaceholder) {
            let placeholderContext = context.child(type)
            return placeholderContext.resolver().resolvePlaceholder(placeholderContext, type)
        }
        if (type instanceof GensonArray) {
            let arrayContext = context.child(type)
            return arrayContext.resolver().resolveArray(arrayContext, type)
        }
        if (type instanceof GensonObject) {
            let objectContext = context.child(type)
            return objectContext.resolver().resolveObject(objectContext, type)
        }
        if (type instanceof GensonValue) {
            return this.resolveValue(context, type)
        }
        if (type instanceof GensonRange) {
            return this.resolveRange(context, type)
        }
        return this.resolveOther(context, type)
    }

    protected abstract resolvePlaceholder(context: GensonContext, type: GensonPlaceholder<any>)
    protected abstract resolveArray(context: GensonContext, type: GensonArray<any>)
    protected abstract resolveObject(context: GensonContext, type: GensonObject)
    protected abstract resolveValue(context: GensonContext, type: GensonValue)
    protected abstract resolveRange(context: GensonContext, type: GensonRange)
    protected abstract resolveOther(context: GensonContext, type: GensonType<any>)
}