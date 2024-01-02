import StubsonContext from "../../core/context/StubsonContext";
import StubsonArray from "../../core/type/implementation/StubsonArray";
import StubsonType from "../../core/type/abstract/StubsonType";
import {StubsonObject} from "../../core/type/implementation/StubsonObject";
import StubsonNodeWrapper from "../../core/type/implementation/StubsonNodeWrapper";
import IteratorStubsonResolver from "./IteratorStubsonResolver";
import StubsonNode from "../../core/type/abstract/StubsonNode";

export default class AllStubsonResolver extends IteratorStubsonResolver {

    protected resolveOther(context: StubsonContext, type: StubsonType<any>) {
        return type.value()
    }

    protected nextVariant(indices: number[], sizes: number[]): number[] {
        let position = indices.length - 1

        while (position >= 0) {
            indices[position]++

            if (indices[position] < sizes[position]) {
                return indices;
            }

            // overflow case
            indices[position] = 0;
            position--
        }

        return null // means end
    }

}