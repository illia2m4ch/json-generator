import {GensonContext} from "../context/GensonContext";
import {GensonResolver} from "../resolver/GensonResolver";

export abstract class GensonConfig {

    init(context: GensonContext) {

    }

    abstract createResolver(context: GensonContext): GensonResolver
    abstract defaultResolver(context: GensonContext): GensonResolver

}