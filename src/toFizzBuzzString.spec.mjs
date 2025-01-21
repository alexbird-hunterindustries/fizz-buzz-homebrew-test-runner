/** toFizzBuzzString
 * converts a number to a string
 *   - For most numbers, return the number
 *   - If it is divisible by 3, return "Fizz" instead
 *   - If it is divisible by 5, return "Buzz" instead
 *   - If it is divisible by 3 and 5, return "FizzBuzz" instead
 */

import { toFizzBuzzString } from "./toFizzBuzzString.mjs";
import { expect } from "./diyUnit.mjs";

[
  { input: 1, output: 1 },
  { input: 2, output: 2 },
  { input: 3, output: "Fizz" },
  { input: 4, output: 4 },
  { input: 5, output: "Buzz" },
].forEach(({ input, output }) => {

  const actual = toFizzBuzzString(input);
  expect(actual).toEqual(output);
});
