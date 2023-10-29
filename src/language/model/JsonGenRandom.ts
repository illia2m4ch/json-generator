import {JsonGenRangeValue} from "./JsonGenRangeValue.ts";

export class JsonGenRandom {

    static item<T>(arr: T[]): T {
        return arr[this.number(0, arr.length - 1)]
    }

    static items<T>(arr: T[], size: number | JsonGenRangeValue): T[] {
        let array: T[] = []
        let staticSize

        if (size instanceof JsonGenRangeValue) {
            staticSize = this.number(size.from, size.to)
        } else {
            staticSize = size
        }

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