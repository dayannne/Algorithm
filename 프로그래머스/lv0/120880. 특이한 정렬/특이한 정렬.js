function solution(numlist, n) {
  let answer = [];
  var numArr = numlist.map((num) => num - n);
  numArr.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 1; i < numArr.length; i++) {
    if (Math.abs(numArr[i]) === Math.abs(numArr[i - 1]) && +numArr[i] + n > numArr[i - 1] + n) {
      const prevNum = numArr[i];
      numArr[i] = numArr[i - 1];
      numArr[i - 1] = prevNum;
    }
    answer.push(numArr[i - 1] + n);
  }
  answer.push(numArr[numArr.length - 1] + n);
  return answer;
}