function solution(my_string, letter) {
      // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}