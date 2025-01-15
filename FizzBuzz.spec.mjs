#!/usr/bin/env node

import './diyUnit.mjs';
import { toFizzBuzzString } from './FizzBuzz.mjs';

/*
 * # FizzBuzz
 *
 * Print something for every number from 1 to 100
 * For most numbers, print the number
 * If it is divizible by 3, print "Fizz" instead
 * If it is divisible by 5, pring "Buzz" instead
 * If it is divisible by 3 and 5, print "FizzBuzz" instead
 * 
 * ## Additional steps
 * 
 * we can get more complicated if we want
 */


describe('toFizzBuzzString', () => {
  [
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: "Fizz" },
    { input: 4, expected: 4 },
    { input: 5, expected: "Buzz" },
    { input: 6, expected: "Fizz" },
  ].forEach(({ input, expected }) => {

    it(`returns ${expected} for ${input}`, () => {
      const actual = toFizzBuzzString(input);
      expect(actual).toEqual(expected);
    })

  });
});

