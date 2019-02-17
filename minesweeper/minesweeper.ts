export default class Minesweeper {
    public annotate(table: string[]): string[] {
        const result = []
        for (let r = 0; r < table.length; r++) {
            const row = table[r]
            let newRow = ""
            for (let c = 0; c < row.length; c++) {
                newRow += annotateCell(table, r, c)
            }
            result.push(newRow)
        }

        return result
    }
}

function annotateCell(table: string[], r: number, c: number): string {
    if (isBomb(table, r, c)) {
        return "*"
    }

    let noOfBombs = 0
    for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
            // it's ok to count table[r][c] since we checked above that it's not *
            if (isBomb(table, i, j)) {
                noOfBombs++
            }
        }
    }

    if (noOfBombs === 0) {
        return " "
    }

    return String(noOfBombs)
}

function isBomb(table: string[], r: number, c: number): boolean {
    if (r < 0 || table.length <= r) {
        return false
    }
    if (c < 0 || table[r].length <= c) {
        return false
    }

    return table[r][c] === "*"
}
