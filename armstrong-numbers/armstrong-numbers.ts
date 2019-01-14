export default class ArmstrongNumbers {
    static isArmstrongNumber(n: number): boolean {
        const originalN = n
        const length = n.toString().length
        let sum = 0
        while (n > 0) {
            const digit = n % 10
            sum += Math.pow(digit, length)
            n = Math.floor(n / 10)
        }
        return sum === originalN
    }
}
