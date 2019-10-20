export default class Pangram {
    sentence: string;

    constructor(sentence: string) {
        this.sentence = sentence
    }

    isPangram(): boolean {
        var onlyLetters = this.sentence
            .toLowerCase()
            .split('')
            .filter(ch => ch.match(/[a-z]/))
        return new Set(onlyLetters).size == 26
    }
}
