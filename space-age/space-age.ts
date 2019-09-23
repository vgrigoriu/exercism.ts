export default class SpaceAge {
    seconds: number

    constructor(earthSeconds: number) {
        this.seconds = earthSeconds
    }

    onEarth(): number {
        return this.round(this.seconds / 31558000)
    }

    onMercury(): number {
        return this.round(this.seconds / 7600525)
    }

    onVenus(): number {
        return this.round(this.seconds / 19411026)
    }

    onMars(): number {
        return this.round(this.seconds / 59359776)
    }

    onJupiter(): number {
        return this.round(this.seconds / 374222565)
    }

    onSaturn(): number {
        return this.round(this.seconds / 928792569)
    }

    onUranus(): number {
        return this.round(this.seconds / 2652994591)
    }

    onNeptune(): number {
        return -1
    }

    private round(x: number): number {
        return Math.round(x * 100) / 100
    }
}