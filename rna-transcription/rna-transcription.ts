class Transcriptor {
    toRna(dna: string): string {
        return [...dna].map(transcribe).join("")
    }
}

const map: Map<string, string> = new Map([
    ["C", "G"],
    ["G", "C"],
    ["A", "U"],
    ["T", "A"],
])

function transcribe(nucleotide: string): string {
    const transcription = map.get(nucleotide)
    if (transcription === undefined) {
        throw "Invalid input DNA."
    }

    return transcription
}

export default Transcriptor
