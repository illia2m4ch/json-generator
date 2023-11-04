import {JsonGenContext} from "../../core/context/JsonGenContext";
import {JsonGenNumber} from "../../core/type/implementation/JsonGenNumber";
import {JsonGenBoolean} from "../../core/type/implementation/JsonGenBoolean";
import {CategoryJsonGenDataSet} from "../../core/function/JsonGenDataSet";
import {StringJsonGenFunction} from "../function/StringJsonGenFunction";
import {ShuffleJsonGenFunction} from "../function/ShuffleJsonGenFunction";
import {BooleanJsonGenFunction} from "../function/BooleanJsonGenFunction";
import nameJson from '../dataset/name.json';
import {JsonGenConfig} from "../../core/config/JsonGenConfig";
import {JsonGenString} from "../../core/type/implementation/JsonGenString";
import {RandomJsonGenResolver} from "../resolver/RandomJsonGenResolver";
import {VariantsJsonGenResolver} from "../resolver/VariantsJsonGenResolver";
import {JsonGenResolver} from "../../core/resolver/JsonGenResolver";

export class DefaultJsonGenConfig extends JsonGenConfig {

    override init(context: JsonGenContext) {
        // values
        context.define('defArraySize', new JsonGenNumber(-1))
        context.define('defOptional', new JsonGenBoolean(false))

        // dataSets
        context.define('name', new CategoryJsonGenDataSet('locale', 'ru', nameJson))

        // functions
        context.define('string', new StringJsonGenFunction())
        context.define('shuffle', new ShuffleJsonGenFunction())
        context.define('boolean', new BooleanJsonGenFunction())
    }

    createResolver(context: JsonGenContext) {
        let arg = context.get('resolver')
        if (arg == null || !(arg instanceof JsonGenString)) {
            return null
        }

        switch ((arg as JsonGenString).value()) {
            case 'random': return new RandomJsonGenResolver()
            case 'variants': return new VariantsJsonGenResolver() // only for array
        }
    }

    defaultResolver(context: JsonGenContext): JsonGenResolver {
        return new RandomJsonGenResolver()
    }

}