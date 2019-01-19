export default class BracketPush {
    constructor(private input: string) {}

    public isPaired(): boolean {
        const stack = []
        for (const ch of this.input) {
            if (isOpening(ch)) {
                stack.push(ch)
            } else if (isClosing(ch)) {
                const opening = stack.pop()
                if (opening === undefined) {
                    // unbalanced closing bracket
                    return false
                }
                if (brackets[opening] !== ch) {
                    // mismatched bracket pair
                    return false
                }
            }
        }

        return stack.length === 0
    }
}

const brackets: { [opening: string]: string } = { "[": "]", "{": "}", "(": ")" }

function isOpening(ch: string) {
    return brackets.hasOwnProperty(ch)
}

function isClosing(ch: string) {
    return Object.values(brackets).includes(ch)
}
