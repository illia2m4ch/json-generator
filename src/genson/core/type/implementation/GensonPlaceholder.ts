import {GensonNode} from "../abstract/GensonNode";
import {GensonContext} from "../../context/GensonContext";
import {GensonType} from "../abstract/GensonType";

export class GensonPlaceholder<Item> extends GensonNode<Item[]> {

    public constructor(value: Item[]) {
        super(value)
    }

    isPrimitive(): boolean {
        return false
    }

}