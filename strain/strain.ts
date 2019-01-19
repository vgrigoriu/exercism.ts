function keep<T>(input: Array<T>, predicate: (item: T) => boolean): Array<T> {
    let result = new Array<T>()
    for (const item of input) {
        if (predicate(item)) {
            result.push(item)
        }
    }
    return result
}
function discard<T>(
    input: Array<T>,
    predicate: (item: T) => boolean
): Array<T> {
    return keep(input, not(predicate))
}

function not<T>(predicate: (_: T) => boolean): (_: T) => boolean {
    return x => !predicate(x)
}

export { keep, discard }
