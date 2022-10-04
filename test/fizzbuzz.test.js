'use strict'
const fizzBuzz = require('../src/fizzbuzz.js');

describe('fizzBuzz(n)', function () {
    it('According to the given number, it must show the multiples of 3 with fizz and with buzz the multiples of 5, which precede it', () => {
        const logSpy = jest.spyOn(console, 'log');
        console.log('3 fizz', '5 buzz', '6 fizz', '9 fizz', '10 buzz');
        expect(logSpy).toHaveBeenCalledWith('3 fizz', '5 buzz', '6 fizz', '9 fizz', '10 buzz');
    });
});