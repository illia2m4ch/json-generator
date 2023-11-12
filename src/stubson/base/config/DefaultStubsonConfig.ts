import StubsonContext from "../../core/context/StubsonContext";
import StubsonNumber from "../../core/type/implementation/StubsonNumber";
import {CategoryStubsonDataSet} from "../../core/function/StubsonDataSet";
import StringStubsonFunction from "../function/StringStubsonFunction";
import ShuffleStubsonFunction from "../function/ShuffleStubsonFunction";
import BooleanStubsonFunction from "../function/BooleanStubsonFunction";
import nameJson from '../dataset/name.json';
import StubsonConfig from "../../core/config/StubsonConfig";
import StubsonString from "../../core/type/implementation/StubsonString";
import RandomStubsonResolver from "../resolver/RandomStubsonResolver";
import VariantsStubsonResolver from "../resolver/VariantsStubsonResolver";
import StubsonResolver from "../../core/resolver/StubsonResolver";
import IteratorStubsonResolver from "../resolver/IteratorStubsonResolver";
import TimestampStubsonFunction from "../function/TimestampGensorFunction";
import ColorStubsonFunction from "../function/ColorGensorFunction";

export default class DefaultStubsonConfig extends StubsonConfig {

    override init(context: StubsonContext) {
        // values
        context.define('defArraySize', new StubsonNumber(-1))

        // dataSets
        context.define('name', new CategoryStubsonDataSet('locale', 'ru', nameJson))

        // functions
        context.define('str', new StringStubsonFunction())
        context.define('shuffle', new ShuffleStubsonFunction())
        context.define('bool', new BooleanStubsonFunction())
        context.define('timestamp', new TimestampStubsonFunction())
        context.define('color', new ColorStubsonFunction())
    }

    createResolver(context: StubsonContext) {
        let arg = context.get('resolver')
        if (arg == null || !(arg instanceof StubsonString)) {
            return null
        }

        switch ((arg as StubsonString).value()) {
            case 'random': return new RandomStubsonResolver()
            case 'variants': return new VariantsStubsonResolver()
            case 'iterator': return new IteratorStubsonResolver()
        }
    }

    defaultResolver(context: StubsonContext): StubsonResolver {
        return new RandomStubsonResolver()
    }

}