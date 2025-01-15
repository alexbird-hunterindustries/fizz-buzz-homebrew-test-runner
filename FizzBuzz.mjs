export function toFizzBuzzString(index) {
  let result = '';
  if (index % 3 === 0) {
    result += "Fizz";
  }
  if (index % 5 === 0) {
    result += "Buzz";
  }
  return result || index;
}
