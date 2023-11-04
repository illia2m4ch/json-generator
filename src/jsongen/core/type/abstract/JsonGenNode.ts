import {JsonGenContext} from "../../context/JsonGenContext";
import {JsonGenType} from "./JsonGenType";
import {JsonGenArgs} from "../../args/JsonGenArgs";

export abstract class JsonGenNode<Value> extends JsonGenType<Value> {

    private static VAL_OPTIONAL = 'optional'
    private static VAL_DEFAULT_OPTIONAL = 'defOptional'

    public args: JsonGenArgs = new JsonGenArgs()

    setArgs(args: JsonGenArgs) {
        this.args = args
    }

    isOptional(context: JsonGenContext) {
        if (this.args.hasMarker(JsonGenNode.VAL_OPTIONAL)) {
            return true
        }
        return context.get(JsonGenNode.VAL_DEFAULT_OPTIONAL).value()
    }

}

