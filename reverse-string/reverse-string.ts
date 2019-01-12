class ReverseString {
    static reverse(s: string) {
        return s
            .split("")
            .reverse()
            .join("")
    }

    static reverse1(s: string) {
        return s
            .split("")
            .reverse()
            .join("")
    }

    static reverse2(s: string) {
        let result = ""
        for (let i = s.length - 1; i >=0; i--) {
            result += s[i]
        }

        return result
    }
}

export default ReverseString
