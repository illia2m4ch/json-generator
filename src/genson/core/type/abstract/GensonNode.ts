import {GensonContext} from "../../context/GensonContext";
import {GensonType} from "./GensonType";
import {GensonArgs} from "../../args/GensonArgs";

export abstract class GensonNode<Value> extends GensonType<Value> {

    private static VAL_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defOptional'

    public args: GensonArgs = new GensonArgs()

    setArgs(args: GensonArgs) {
        this.args = args
    }

    isOptional(context: GensonContext) {
        if (this.args.hasMarker(GensonNode.VAL_OPTIONAL)) {
            return true
        }
        return context.get(GensonNode.VAL_DEFAULT_OPTIONAL).value()
    }

}

