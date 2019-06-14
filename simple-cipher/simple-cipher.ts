enum Direction {
    ENCODE = 1,
    DECODE = -1
}

const ALL_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const A = "a".charCodeAt(0)
const DEFAULT_KEY_LENGTH = 100

class SimpleCipher {
    key: string

    constructor(key: string = SimpleCipher.randomKey()) {
        if (!key.match(`^[${ALL_LETTERS}]+$`)) {
            throw "Bad key"
        }
        this.key = key
    }

    encode(plain: string): string {
        return this.transform(plain, Direction.ENCODE)
    }

    decode(encrypted: string): string {
        return this.transform(encrypted, Direction.DECODE)
    }

    private transform(original: string, direction: Direction): string {
        let transformed = ""
        for (let i = 0; i < original.length; i++) {
            const char = original[i].charCodeAt(0) - A
            const keyChar =
                (this.key[i % this.key.length].charCodeAt(0) - A) * direction +
                ALL_LETTERS.length
            transformed += String.fromCharCode(A + ((char + keyChar) % ALL_LETTERS.length))
        }
        return transformed
    }

    private static randomKey(): string {
        let key = ""
        for (let i = 0; i < DEFAULT_KEY_LENGTH; i++) {
            key += ALL_LETTERS.charAt(
                Math.floor(Math.random() * ALL_LETTERS.length)
            )
        }

        return key
    }
}

export default SimpleCipher
