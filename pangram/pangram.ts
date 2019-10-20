export default class Pangram {
    sentence: string;

    constructor(sentence: string) {
        this.sentence = sentence
    }

    isPangram(): boolean {
        return this.sentence.length > 0
    }
}