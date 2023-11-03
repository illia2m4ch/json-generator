import {JsonGenNumber} from "./JsonGenNode";
import {JsonGenRange} from "./JsonGenRange";

export abstract class JsonGenResolver {
    resolveItem<T>(arr: T[]): T {
        return arr[this.resolveNumber(0, arr.length - 1)]
    }

    resolveItems<T>(arr: T[], size: JsonGenNumber | JsonGenRange): T[] {
        let staticSize = 1

        if (size instanceof JsonGenNumber) {
            staticSize = size.value()
        } else if (size instanceof JsonGenRange) {
            staticSize = this.resolveNumber(size.from, size.to)
        }

        if (staticSize === -1) {
            return arr
        }

        let array: T[] = []

        for (let i = 0; i < staticSize; i++) {
            array.push(this.resolveItem(arr))
        }

        return array
    }

    resolveBoolean(): boolean {
        return this.resolveNumber(0, 1) === 1
    }

    abstract resolveNumber(from: number, to: number): number
}

export class RandomJsonGenResolver extends JsonGenResolver {
    resolveNumber(from: number, to: number): number {
        return from + Math.floor(Math.random() * (to + 1 - from))
    }
}