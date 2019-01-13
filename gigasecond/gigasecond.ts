class Gigasecond {
    static readonly gigasecond = 1000000000000
    private readonly _date: Date
    constructor(date: Date) {
        this._date = new Date(date.valueOf() + Gigasecond.gigasecond)
    }
    date() {
        return this._date
    }
}

export default Gigasecond
