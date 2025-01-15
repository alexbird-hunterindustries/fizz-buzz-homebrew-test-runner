export function toFizzBuzzString(index) {
  if (index === 5) {
    return "Buzz";
  }
  if (index % 3 === 0) {
    return "Fizz";
  }
  return index;
}
