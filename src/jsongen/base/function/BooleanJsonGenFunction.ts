import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenArgs} from "../../core/args/JsonGenArgs";
import {JsonGenType} from "../../core/type/abstract/JsonGenType";
import {JsonGenPlaceholder} from "../../core/type/implementation/JsonGenPlaceholder";
import {JsonGenFunction} from "../../core/function/JsonGenFunction";

export class BooleanJsonGenFunction extends JsonGenFunction {
    execute(context: JsonGenContext, args: JsonGenArgs): JsonGenType<any> {
        return new JsonGenPlaceholder([true, false]);
    }
}