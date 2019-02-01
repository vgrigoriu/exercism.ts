class DiffieHellman {
    private p: number
    private g: number
    constructor(p: number, g: number) {
        if (!isPrime(p) || !isPrime(g)) {
            throw "p and g must be primes"
        }

        this.p = p
        this.g = g
    }

    getPublicKeyFromPrivateKey(privateKey: number): number {
        if (privateKey <= 1 || this.p <= privateKey) {
            throw "privateKey must be greater than 1 and less than p"
        }
        return Math.pow(this.g, privateKey) % this.p
    }

    getSharedSecret(privateKey: number, publicKey: number): number {
        return Math.pow(publicKey, privateKey) % this.p
    }
}

function isPrime(n: number): boolean {
    if (n < 2) {
        return false
    }
    if (n % 2 === 0) {
        return false
    }
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

export default DiffieHellman
