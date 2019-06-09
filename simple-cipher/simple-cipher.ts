enum Direction {
    ENCODE = 1,
    DECODE = -1
}

const ALL_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const A = "a".charCodeAt(0)

class SimpleCipher {
    key: string

    constructor(key: string = SimpleCipher.randomKey()) {
        if (!key.match(/^[a-z]+$/)) {
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
                26
            transformed += String.fromCodePoint(A + ((char + keyChar) % 26))
        }
        return transformed
    }

    private static randomKey(): string {
        let key = ""
        for (let i = 0; i < 100; i++) {
            key += ALL_LETTERS.charAt(
                Math.floor(Math.random() * ALL_LETTERS.length)
            )
        }

        return key
    }
}

export default SimpleCipher
