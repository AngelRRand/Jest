function fizzBuzz(num) {
    for (i = 1; i <= num; i++) {
        if (i % 5 === 0) {
            console.log(`${i} buzz`)
        } else if (i % 3 === 0) {
            console.log(`${i} fizz`)
        }
    }
}

module.exports = fizzBuzz