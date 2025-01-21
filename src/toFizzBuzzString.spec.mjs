/** toFizzBuzzString
 * converts a number to a string
 *   - For most numbers, return the number
 *   - If it is divisible by 3, return "Fizz" instead
 *   - If it is divisible by 5, return "Buzz" instead
 *   - If it is divisible by 3 and 5, return "FizzBuzz" instead
 */

import { toFizzBuzzString } from "./toFizzBuzzString.mjs";
import { expect } from "./diyUnit.mjs";

expect(toFizzBuzzString(1)).toEqual(1);

