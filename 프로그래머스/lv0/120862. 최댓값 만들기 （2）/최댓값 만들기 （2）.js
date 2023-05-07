function solution(numbers) {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let product = numbers[i] * numbers[j];
      if ( product > max) {
        max = product;
      }
    }
  }
  return max;
}
