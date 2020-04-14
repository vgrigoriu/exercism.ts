type Cell = {
    row: number,
    column: number
}

export default class Minesweeper {
    static readonly BOMB_CELL = "*"
    static readonly EMPTY_CELL = " "

    public annotate(table: string[]): string[] {
        return table.map((_, row) =>
            table[row].split('').map((_, column) => {
                return annotateCell({ row, column })
            }).join('')
        )

        function annotateCell(cell: Cell): string {
            if (isBomb(cell)) {
                return Minesweeper.BOMB_CELL
            }

            const howManyBombNeighbors = neighbors(cell)
                .filter(isInsideTable)
                .filter(isBomb)
                .length

            if (howManyBombNeighbors === 0) {
                return Minesweeper.EMPTY_CELL
            }

            return String(howManyBombNeighbors)
        }

        function neighbors(cell: Cell): Cell[] {
            return [-1, 0, 1].flatMap(deltaRow =>
                [-1, 0, 1].map(deltaColumn => {
                    return { row: cell.row + deltaRow, column: cell.column + deltaColumn }
                })
            )
        }

        function isInsideTable(cell: Cell): boolean {
            return 0 <= cell.row && cell.row < table.length
                && 0 <= cell.column && cell.column < table[cell.row].length
        }

        function isBomb(cell: Cell): boolean {
            return table[cell.row][cell.column] === Minesweeper.BOMB_CELL
        }
    }
}
