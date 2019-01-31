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
            const char = plain[i]
            const keyChar = this.key[i % this.key.length]
            encrypted += String.fromCodePoint(
                a + ((char.charCodeAt(0) - a + keyChar.charCodeAt(0) - a) % 26)
            )
        }
        return encrypted
    }

    decode(encrypted: string): string {
        let plain = ""
        const a = "a".charCodeAt(0)
        for (let i = 0; i < encrypted.length; i++) {
            const char = encrypted[i]
            const keyChar = this.key[i % this.key.length]
            plain += String.fromCodePoint(
                a + ((char.charCodeAt(0) - keyChar.charCodeAt(0) + 26) % 26)
            )
        }
        return plain
    }

    private static randomKey(): string {
        const allLetters = "abcdefghijklmnopqrstuvwxyz"
        let key = ""
        for (let i = 0; i < 100; i++) {
            key += allLetters.charAt(
                Math.floor(Math.random() * allLetters.length)
            )
        }

        return key
    }
}

export default SimpleCipher
