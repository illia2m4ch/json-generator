import {JsonGenNode} from "../abstract/JsonGenNode";
import {JsonGenContext} from "../../context/JsonGenContext";
import {JsonGenType} from "../abstract/JsonGenType";

export class JsonGenPlaceholder<Item> extends JsonGenNode<Item[]> {

    public constructor(value: Item[]) {
        super(value);
    }

    isPrimitive(): boolean {
        return false;
    }

}