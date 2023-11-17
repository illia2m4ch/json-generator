import StubsonRange from "../type/implementation/StubsonRange";
import StubsonContext from "../context/StubsonContext";
import StubsonType from "../type/abstract/StubsonType";
import {StubsonObject} from "../type/implementation/StubsonObject";
import StubsonArray from "../type/implementation/StubsonArray";
import StubsonPlaceholder from "../type/implementation/StubsonPlaceholder";
import StubsonValue from "../type/implementation/StubsonValue";

export default abstract class StubsonResolver {

    resolve(context: StubsonContext, type: StubsonType<any>) {
        if (type instanceof StubsonPlaceholder) {
            let placeholderContext = context.child(type)
            return placeholderContext.resolver().resolvePlaceholder(placeholderContext, type)
        }
        if (type instanceof StubsonArray) {
            let arrayContext = context.child(type)
            return arrayContext.resolver().resolveArray(arrayContext, type)
        }
        if (type instanceof StubsonObject) {
            let objectContext = context.child(type)
            return objectContext.resolver().resolveObject(objectContext, type)
        }
        if (type instanceof StubsonValue) {
            if (type.postFunction) {
                return type
            }
            return this.resolveValue(context, type)
        }
        if (type instanceof StubsonRange) {
            return this.resolveRange(context, type)
        }
        return this.resolveOther(context, type)
    }

    protected abstract resolvePlaceholder(context: StubsonContext, type: StubsonPlaceholder<any>)
    protected abstract resolveArray(context: StubsonContext, type: StubsonArray<any>)
    protected abstract resolveObject(context: StubsonContext, type: StubsonObject)
    protected abstract resolveValue(context: StubsonContext, type: StubsonValue)
    protected abstract resolveRange(context: StubsonContext, type: StubsonRange)
    protected abstract resolveOther(context: StubsonContext, type: StubsonType<any>)
}