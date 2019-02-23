export default class RotationalCipher {
    static rotate(plain: string, key: number) {
        let encrypted = ""
        for (let index = 0; index < plain.length; index++) {
            encrypted += rotateChar(plain[index], key)
        }

        return encrypted
    }
}

function rotateChar(c: string, key: number): string {
    if (c < "A" || ("Z" < c && c < "a") || "z" < c) {
        // not a letter
        return c
    }
    const char = c.charCodeAt(0)
    const a = ("a" <= c && c <= "z" ? "a" : "A").charCodeAt(0)
    return String.fromCharCode(a + ((char - a + key) % 26))
}
