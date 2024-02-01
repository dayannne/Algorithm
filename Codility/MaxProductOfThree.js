// https://app.codility.com/demo/results/trainingU69YGN-EH4/

function solution(A) {
  // 음수의 절대값으로 비교했을 때 가장 큰 경우 고려
  const sortedA = A.sort((a, b) => b - a);
  const len = sortedA.length;
  const max1 = sortedA[0] * sortedA[1] * sortedA[2];
  const max2 = sortedA[len - 1] * sortedA[len - 2] * sortedA[0];

  return Math.max(max1, max2);
}

// 배열을 내림차순 정렬
// 음수의 절대값이 더 큰 경우를 고려
//  - 가장 큰 세 숫자, 가장 작은 2 숫자 + 가장 큰 1숫자 비교
//  - ex) [-1000,-1,0,1,2,3] ⇒ (3,2,1) (-1000,-1,3) ⇒ 6, 3000
