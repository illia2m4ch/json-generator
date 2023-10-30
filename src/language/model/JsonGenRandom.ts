import {JsonGenRangeValue} from "./JsonGenRangeValue.ts";
import {JsonGenNumber} from "./JsonGenNode";

export class JsonGenRandom {

    static item<T>(arr: T[]): T {
        return arr[this.number(0, arr.length - 1)]
    }

    static items<T>(arr: T[], size: JsonGenNumber | JsonGenRangeValue): T[] {
        let staticSize = 1

        if (size instanceof JsonGenNumber) {
            staticSize = size.value()
        } else if (size instanceof JsonGenRangeValue) {
            staticSize = this.number(size.from, size.to)
        }

        if (staticSize === 0) {
            return arr
        }

        let array: T[] = []

        for (let i = 0; i < staticSize; i++) {
            array.push(this.item(arr))
        }

        return array
    }

    static number(from: number, to: number) {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }

    static boolean() {
        return Math.random() < 0.5
    }

}