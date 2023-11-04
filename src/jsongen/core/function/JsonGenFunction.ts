import {JsonGenContext} from "../context/JsonGenContext";
import {JsonGenType} from "../type/abstract/JsonGenType";
import {JsonGenArgs} from "../args/JsonGenArgs";

export abstract class JsonGenFunction {
    abstract execute(context: JsonGenContext, args: JsonGenArgs): JsonGenType<any>
}