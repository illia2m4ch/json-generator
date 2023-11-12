import {GensonContext} from "../../core/context/GensonContext";
import {GensonNumber} from "../../core/type/implementation/GensonNumber";
import {CategoryGensonDataSet} from "../../core/function/GensonDataSet";
import {StringGensonFunction} from "../function/StringGensonFunction";
import {ShuffleGensonFunction} from "../function/ShuffleGensonFunction";
import {BooleanGensonFunction} from "../function/BooleanGensonFunction";
import nameJson from '../dataset/name.json';
import {GensonConfig} from "../../core/config/GensonConfig";
import {GensonString} from "../../core/type/implementation/GensonString";
import {RandomGensonResolver} from "../resolver/RandomGensonResolver";
import {VariantsGensonResolver} from "../resolver/VariantsGensonResolver";
import {GensonResolver} from "../../core/resolver/GensonResolver";
import {IteratorGensonResolver} from "../resolver/IteratorGensonResolver";
import TimestampGensonFunction from "../function/TimestampGensorFunction";
import ColorGensonFunction from "../function/ColorGensorFunction";

export class DefaultGensonConfig extends GensonConfig {

    override init(context: GensonContext) {
        // values
        context.define('defArraySize', new GensonNumber(-1))

        // dataSets
        context.define('name', new CategoryGensonDataSet('locale', 'ru', nameJson))

        // functions
        context.define('str', new StringGensonFunction())
        context.define('shuffle', new ShuffleGensonFunction())
        context.define('bool', new BooleanGensonFunction())
        context.define('timestamp', new TimestampGensonFunction())
        context.define('color', new ColorGensonFunction())
    }

    createResolver(context: GensonContext) {
        let arg = context.get('resolver')
        if (arg == null || !(arg instanceof GensonString)) {
            return null
        }

        switch ((arg as GensonString).value()) {
            case 'random': return new RandomGensonResolver()
            case 'variants': return new VariantsGensonResolver()
            case 'iterator': return new IteratorGensonResolver()
        }
    }

    defaultResolver(context: GensonContext): GensonResolver {
        return new RandomGensonResolver()
    }

}