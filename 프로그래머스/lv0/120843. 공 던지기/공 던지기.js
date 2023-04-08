function solution(numbers, k) {
  let result = numbers[0];
  let count = 1;
  while (count < k) {
    // 인덱스+2가 인덱스 마지막을 초과할 때
    if (numbers.indexOf(result) + 2 - numbers.length === 0 ) {
      result = numbers[0];
    } else if( numbers.indexOf(result)  + 2  - numbers.length === 1){
        result = numbers[1];
    } else{
      result = numbers[numbers.indexOf(result) + 2];
    }
      console.log(result)
    count++;
  }
  return result;
}