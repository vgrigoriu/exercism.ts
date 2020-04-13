type Cell = {
    row: number,
    column: number
}

export default class Minesweeper {
    public annotate(table: string[]): string[] {
        const result = []
        for (let row = 0; row < table.length; row++) {
            //const row = table[row]
            let newRow = ""
            for (let column = 0; column < table[row].length; column++) {
                newRow += this.annotateCell(table, { row, column })
            }
            result.push(newRow)
        }

        return result
    }


    private annotateCell(table: string[], cell: Cell): string {
        if (this.isBomb(table, cell)) {
            return "*"
        }

        let noOfBombs = 0
        for (let i = cell.row - 1; i <= cell.row + 1; i++) {
            for (let j = cell.column - 1; j <= cell.column + 1; j++) {
                // it's ok to count cell since we checked above that it's not '*'
                if (this.isBomb(table, { row: i, column: j })) {
                    noOfBombs++
                }
            }
        }

        if (noOfBombs === 0) {
            return " "
        }

        return String(noOfBombs)
    }

    private isBomb(table: string[], cell: Cell): boolean {
        if (cell.row < 0 || table.length <= cell.row) {
            return false
        }
        if (cell.column < 0 || table[cell.row].length <= cell.column) {
            return false
        }

        return table[cell.row][cell.column] === "*"
    }
}
