function keep<T>(input: Array<T>, _: (item: T) => boolean): Array<T> {
    return input
}
function discard<T>(input: Array<T>, _: (item: T) => boolean): Array<T> {
    return input
}

export { keep, discard }
