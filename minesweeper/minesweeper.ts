type Cell = {
    row: number,
    column: number
}

export default class Minesweeper {
    static readonly BOMB_CELL = "*"
    static readonly EMPTY_CELL = " "

    public annotate(table: string[]): string[] {
        const annotatedTable = table.map((_, row) => {
            return annotateRow(row)
        })

        return annotatedTable

        function annotateRow (row: number): string {
            return table[row].split('').map((_, column) => {
                return annotateCell({ row, column })
            }).join('')
        }

        function annotateCell(cell: Cell): string {
            if (isBomb(table, cell)) {
                return Minesweeper.BOMB_CELL
            }
    
            let noOfBombs = 0
            for (let i = cell.row - 1; i <= cell.row + 1; i++) {
                for (let j = cell.column - 1; j <= cell.column + 1; j++) {
                    // it's ok to count `cell` since we checked above that it's not '*'
                    if (isBomb(table, { row: i, column: j })) {
                        noOfBombs++
                    }
                }
            }
    
            if (noOfBombs === 0) {
                return Minesweeper.EMPTY_CELL
            }
    
            return String(noOfBombs)
        }

        function isBomb(table: string[], cell: Cell): boolean {
            if (cell.row < 0 || table.length <= cell.row) {
                return false
            }
            if (cell.column < 0 || table[cell.row].length <= cell.column) {
                return false
            }
    
            return table[cell.row][cell.column] === Minesweeper.BOMB_CELL
        }
    }
}
