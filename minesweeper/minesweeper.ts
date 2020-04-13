export default class Minesweeper {
    public annotate(table: string[]): string[] {
        const result = []
        for (let row = 0; row < table.length; row++) {
            //const row = table[row]
            let newRow = ""
            for (let column = 0; column < table[row].length; column++) {
                newRow += this.annotateCell(table, row, column)
            }
            result.push(newRow)
        }

        return result
    }


    private annotateCell(table: string[], row: number, column: number): string {
        if (this.isBomb(table, row, column)) {
            return "*"
        }

        let noOfBombs = 0
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = column - 1; j <= column + 1; j++) {
                // it's ok to count table[r][c] since we checked above that it's not *
                if (this.isBomb(table, i, j)) {
                    noOfBombs++
                }
            }
        }

        if (noOfBombs === 0) {
            return " "
        }

        return String(noOfBombs)
    }

    private isBomb(table: string[], row: number, column: number): boolean {
        if (row < 0 || table.length <= row) {
            return false
        }
        if (column < 0 || table[row].length <= column) {
            return false
        }

        return table[row][column] === "*"
    }
}
