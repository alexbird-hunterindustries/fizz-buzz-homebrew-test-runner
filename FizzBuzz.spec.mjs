#!/usr/bin/env node

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

const actual = toFizzBuzzString(1);
const expected = 1;
console.log({ result: actual === expected ? '✅ PASS' : '❌ FAIL', actual, expected });