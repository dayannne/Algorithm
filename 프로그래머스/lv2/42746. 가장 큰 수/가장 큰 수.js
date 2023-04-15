function solution(numbers) {
 let answer = numbers
    .map((num) => num + '')
    .sort((a, b) => (b + a) - (a + b))
    .join('');
    // numbers의 원소는 0 이상 1,000 이하입니다. , 0이 맨 앞에 올 때
  return answer[0] === '0' ? '0' : answer ;
}