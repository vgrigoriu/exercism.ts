export default class Triangle {
    sides: number[]

    constructor(...sides: number[]) {
        // because otherwise 10 < 1, because javascript
        this.sides = sides.sort(function(x: number, y: number) {
            return x - y
        })
    }

    kind(): string {
        if (this.sides[0] <= 0) {
            throw "sides have to be positive"
        }
        if (this.sides[0] + this.sides[1] < this.sides[2]) {
            throw "not a triangle"
        }
        if (
            this.sides[0] === this.sides[1] &&
            this.sides[1] === this.sides[2]
        ) {
            return "equilateral"
        }
        if (
            this.sides[0] === this.sides[1] ||
            this.sides[1] === this.sides[2]
        ) {
            return "isosceles"
        }
        return "scalene"
    }
}
