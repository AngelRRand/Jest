'use strict'
const countWordString = require('../src/countRepWords.js');
  
  describe('countWordString(string)', function() {
    it('It should return the number of repeated words in a string', () => {
      const fib1 = countWordString('Hi how are things How are you Are you a developer I am also a developer');
      const fib2 = countWordString('Hi Hi Good morning');
      const fib3 = countWordString('Where do you buy water at home they buy water');
      expect(fib1).toStrictEqual({Are:1,Hi:1,How:1,I:1,a:2,also:1,am:1,are:2,developer:2,how:1,things:1,you:2});
      expect(fib2).toStrictEqual({Hi: 2, Good: 1, morning: 1});
      expect(fib3).toStrictEqual({Where: 1, do: 1, you: 1, buy: 2, water: 2, you:1, at:1, home:1, they:1});
    });
  });