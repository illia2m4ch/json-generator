import {GensonNode} from "../abstract/GensonNode";

export class GensonNull extends GensonNode<null> {
    constructor() {
        super(null)
    }
}