const ALL_LETTERS = "abcdefghijklmnopqrstuvwxyz"

class SimpleCipher {
    key: string

    constructor(key: string = SimpleCipher.randomKey()) {
        if (!key.match(/^[a-z]+$/)) {
            throw "Bad key"
        }
        this.key = key
    }

    encode(plain: string): string {
        let encrypted = ""
        const a = "a".charCodeAt(0)
        for (let i = 0; i < plain.length; i++) {
            const char = plain[i].charCodeAt(0) - a
            const keyChar = this.key[i % this.key.length].charCodeAt(0) - a
            encrypted += String.fromCodePoint(a + ((char + keyChar) % 26))
        }
        return encrypted
    }

    decode(encrypted: string): string {
        let plain = ""
        const a = "a".charCodeAt(0)
        for (let i = 0; i < encrypted.length; i++) {
            const char = encrypted[i].charCodeAt(0) - a
            const keyChar = this.key[i % this.key.length].charCodeAt(0) - a
            plain += String.fromCodePoint(a + ((char - keyChar + 26) % 26))
        }
        return plain
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
