export default class SpaceAge {
    seconds: number

    constructor(earthSeconds: number) {
        this.seconds = earthSeconds
    }

    onEarth(): number {
        return this.seconds / 31555695.803092458188
    }

    onMercury(): number {
        return -1
    }

    onVenus(): number {
        return -1
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
}