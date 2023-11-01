import {JsonGenContext} from "../data/JsonGenContext";

export abstract class JsonGenType {

    abstract json(context: JsonGenContext): any

}