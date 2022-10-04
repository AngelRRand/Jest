function nFibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return nFibonacci(n - 1) + nFibonacci(n - 2)
}

module.exports = nFibonacci
