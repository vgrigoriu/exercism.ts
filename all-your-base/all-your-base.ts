export default class Converter {
    convert(digits: number[], from: number, to: number): number[] {
        if (from < 2) {
            throw "Wrong input base"
        }
        if (to < 2 || !Number.isInteger(to)) {
            throw "Wrong output base"
        }
        if (digits.length === 0) {
            throw "Input has wrong format"
        }
        if (digits.length > 1 && digits[0] === 0) {
            throw "Input has wrong format"
        }
        const n10 = this.to10(digits, from)
        return this.from10(n10, to)
    }

    private to10(digits: number[], base: number): number {
        return digits.reduce((n: number, digit: number) => {
            if (digit < 0 || base <= digit) {
                throw "Input has wrong format"
            }
            return n * base + digit
        })
    }

    private from10(n: number, base: number): number[] {
        if (n === 0) {
            return [0]
        }
        const result = []
        while (n > 0) {
            result.unshift(n % base)
            n = Math.floor(n / base)
        }

        return result
    }
}
