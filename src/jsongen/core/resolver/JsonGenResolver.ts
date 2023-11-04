import {JsonGenRange} from "../type/implementation/JsonGenRange";
import {JsonGenContext} from "../context/JsonGenContext";
import {JsonGenType} from "../type/abstract/JsonGenType";
import {JsonGenObject} from "../type/implementation/JsonGenObject";
import {JsonGenArray} from "../type/implementation/JsonGenArray";
import {JsonGenPlaceholder} from "../type/implementation/JsonGenPlaceholder";
import {JsonGenValue} from "../type/implementation/JsonGenValue";

export abstract class JsonGenResolver {

    resolve(context: JsonGenContext, type: JsonGenType<any>) {
        if (type instanceof JsonGenPlaceholder) {
            let placeholderContext = context.child(type)
            return placeholderContext.resolver().resolvePlaceholder(placeholderContext, type)
        }
        if (type instanceof JsonGenArray) {
            let arrayContext = context.child(type)
            return arrayContext.resolver().resolveArray(arrayContext, type)
        }
        if (type instanceof JsonGenObject) {
            let objectContext = context.child(type)
            return objectContext.resolver().resolveObject(objectContext, type)
        }
        if (type instanceof JsonGenValue) {
            return this.resolveValue(context, type)
        }
        if (type instanceof JsonGenRange) {
            return this.resolveRange(context, type)
        }
        return this.resolveOther(context, type)
    }

    protected abstract resolvePlaceholder(context: JsonGenContext, type: JsonGenPlaceholder<any>)
    protected abstract resolveArray(context: JsonGenContext, type: JsonGenArray<any>)
    protected abstract resolveObject(context: JsonGenContext, type: JsonGenObject)
    protected abstract resolveValue(context: JsonGenContext, type: JsonGenValue)
    protected abstract resolveRange(context: JsonGenContext, type: JsonGenRange)
    protected abstract resolveOther(context: JsonGenContext, type: JsonGenType<any>)
}