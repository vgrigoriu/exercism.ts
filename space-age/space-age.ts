export default class SpaceAge {
    seconds: number

    constructor(earthSeconds: number) {
        this.seconds = earthSeconds
    }

    onEarth(): number {
        return this.round(this.seconds / 31555695)
    }

    onMercury(): number {
        return this.round(this.seconds / 7600525)
    }

    onVenus(): number {
        return this.round(this.seconds / 19411026)
    }

    onMars(): number {
        return -1
    }

    onJupiter(): number {
        return -1
    }

    onSaturn(): number {
        return -1
    }

    onUranus(): number {
        return -1
    }

    onNeptune(): number {
        return -1
    }

    private round(x: number): number {
        return Math.round(x * 100) / 100
    }
}