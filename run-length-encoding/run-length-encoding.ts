export default class RunLengthEncoding {
    static encode(input: string) {
        if (input === "") {
            return ""
        }
        let currentChar = input[0]
        let currentLength = 1
        let result = ""
        for (const ch of input.substr(1)) {
            if (ch === currentChar) {
                currentLength += 1
            } else {
                if (currentLength > 1) {
                    result += currentLength
                }
                result += currentChar
                currentChar = ch
                currentLength = 1
            }
        }
        if (currentLength > 1) {
            result += currentLength
        }
        result += currentChar
        return result
    }
    static decode(input: string) {
        let currentLength = 0
        let result = ""
        for (const ch of input) {
            if (isDigit(ch)) {
                // readability ftw
                currentLength = currentLength * 10 + +ch
            } else {
                result += ch.repeat(Math.max(1, currentLength))
                currentLength = 0
            }
        }
        return result
    }
}
function isDigit(ch: string) {
    return "0" <= ch && ch <= "9"
}
