export default function accumulate<T, R>(
    list: Array<T>,
    transform: (x: T) => R
): Array<R> {
    const result = []
    for (const item of list) {
        result.push(transform(item))
    }

    return result
}
