export default class FlattenArray {
    static flatten<T>(array: Rec<T>) {
        const result: T[] = []
        FlattenArray.add(result, array)
        return result
    }

    private static add<T>(result: T[], array: Rec<T>) {
        for (const element of array) {
            if (element instanceof Array) {
                FlattenArray.add(result, element)
            } else if (element !== undefined) {
                result.push(element)
            }
        }
    }
}

type TOrArray<T> = T | T[]

type Rec<T> = TOrArray<T>[] | TOrArray<TOrArray<T>>[]