class CollatzConjecture {
    static steps(n: number): number {
        if (n <= 0) {
            throw "Only positive numbers are allowed"
        }
        let result = 0
        while (n !== 1) {
            result++
            if (n % 2 === 0) {
                n = n / 2
            } else {
                n = n * 3 + 1
            }
        }

        return result
    }
}

export default CollatzConjecture
