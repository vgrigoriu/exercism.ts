export default class SpaceAge {
    seconds: number

    constructor(earthSeconds: number) {
        this.seconds = earthSeconds
    }

    onEarth(): number {
        return this.yearsOn(Planet.Earth)
    }

    onMercury(): number {
        return this.yearsOn(Planet.Mercury)
    }

    onVenus(): number {
        return this.yearsOn(Planet.Venus)
    }

    onMars(): number {
        return this.yearsOn(Planet.Mars)
    }

    onJupiter(): number {
        return this.yearsOn(Planet.Jupiter)
    }

    onSaturn(): number {
        return this.yearsOn(Planet.Saturn)
    }

    onUranus(): number {
        return this.yearsOn(Planet.Uranus)
    }

    onNeptune(): number {
        return this.yearsOn(Planet.Neptune)
    }

    private yearsOn(planet: Planet) : number {
        return this.round(this.seconds / planet)
    }

    private round(x: number): number {
        return Math.round(x * 100) / 100
    }
}

enum Planet {
    Earth = 31558000,
    Mercury = 7600525,
    Venus = 19411026,
    Mars = 59359776,
    Jupiter = 374222565,
    Saturn = 928792569,
    Uranus = 2652994591,
    Neptune = 5196280668,
}
