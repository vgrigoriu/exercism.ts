class Transcriptor {
    toRna(dna: string): string {
        return dna
            .split("")
            .map(transcribe)
            .join("")
    }
}

const map: { [nucleotide: string]: string } = {
    C: "G",
    G: "C",
    A: "U",
    T: "A"
}

function transcribe(nucleotide: string): string {
    if (!map.hasOwnProperty(nucleotide)) {
        throw "Invalid input DNA."
    }

    return map[nucleotide]
}

export default Transcriptor
