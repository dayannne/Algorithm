function recursive(a,b,currBottle, answer) {
  if (currBottle < a) {
    return answer;
  }
  // '마트에 가져간 빈병'으로 '새로 받은 콜라' 개수
  const newBottle = ~~(currBottle / a) * b;
  // 현재 빈병 개수에서 '마트에 가져간 빈병'을 빼고 '남은 빈병' 개수
  const remainBottle = currBottle % a;
  // currBottle = 새로 받은 콜라 + 남은 빈병 개수를 더해 다시 재귀
  return recursive(a, b, newBottle + remainBottle, answer + newBottle);
}

function solution(a, b, n) {
  let answer = 0;
  return recursive(a, b, n, answer);
}
