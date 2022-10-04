'use strict'
const nFibonacci = require('../src/fibonacci.js');
  
  describe('nFibonacci(n)', function() {
    it('debe devolver el número de la serie de fibonacci correspondiente', () => {
      const fib1 = nFibonacci(0);
      const fib2 = nFibonacci(3);
      const fib3 = nFibonacci(6);
      const fib4 = nFibonacci(9);
      const fib5 = nFibonacci(11);
      expect(fib1).toBe(0);
      expect(fib2).toBe(2);
      expect(fib3).toBe(8);
      expect(fib4).toBe(34);
      expect(fib5).toBe(89);
    });
  });