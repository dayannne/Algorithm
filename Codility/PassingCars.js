// https://app.codility.com/demo/results/trainingTU6JKC-99Z/

function solution(A) {
  // 0 - 동 / 1 - 서
  // 자동차는 무조건 동(0) - 서(1) 방향으로 이동

  let count = 0;
  let east = 0; // 동쪽 개수
  for (const x of A) {
    if (x === 0) {
      east += 1;
    } else if (x === 1 && east > 0) {
      count += east * 1;
    }
  }
  return count > 1000000000 ? -1 : count; // return에서 해당 조건 추가
}
