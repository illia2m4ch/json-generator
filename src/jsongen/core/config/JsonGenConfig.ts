import {JsonGenContext} from "../context/JsonGenContext";
import {JsonGenResolver} from "../resolver/JsonGenResolver";

export abstract class JsonGenConfig {

    init(context: JsonGenContext) {

    }

    abstract createResolver(context: JsonGenContext): JsonGenResolver
    abstract defaultResolver(context: JsonGenContext): JsonGenResolver

}