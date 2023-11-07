import {GensonType} from "./GensonType";
import {GensonArgs} from "../../args/GensonArgs";

export abstract class GensonNode<Value> extends GensonType<Value> {
    public args: GensonArgs = new GensonArgs()
}

