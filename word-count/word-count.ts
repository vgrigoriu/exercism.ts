export default class Words {
    count(input: string): Map<string, number> {
        const result = new Map<string, number>()
        const words = input.toLowerCase().split(/\s+/)
        for (const word of words) {
            if (word === "") {
                continue
            }
            result.set(word, (result.get(word) || 0) + 1)
        }

        return result
    }
}
