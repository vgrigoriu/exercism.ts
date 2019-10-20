export default class Pangram {
    sentence: string;

    constructor(sentence: string) {
        this.sentence = sentence
    }

    isPangram(): boolean {
        return new Set(this.sentence.toLowerCase().split('').filter(ch => ch.match(/[a-z]/))).size == 26
    }
}
