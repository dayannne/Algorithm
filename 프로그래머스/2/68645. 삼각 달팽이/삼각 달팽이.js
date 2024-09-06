function sumN(n) {
  let N = 0;
  for (let i = n; i > 0; i--) {
    N += i;
  }
  return N;
}

function solution(n) {
  /* 3 종류의 방향이 있음
       아래 -> +(n++)씩
       오른쪽 -> +1씩
       위 -> -(n--)씩
    */
  /* <증가/감소 표현>
        [n=4] 1 2 3 / 1 1 1 / -4 -3 / 2
        [n=5] 1 2 3 4 / 1 1 1 1 / -5 -4 -3 / 2 3 / 1 
        [n=6] 1 2 3 4 5 / 1 1 1 1 1 / -6 -5 -4 -3 / 2 3 4 / 1 1 / -5
        1. n-1번(아래) / n-1번(오른쪽) / n-2번(위) / n-3번(아래) / ... 1번
        2. n-1번(아래) - n-1번(오른쪽) 까지의 숫자는 (n * 2) 미만임
    */
  const N = sumN(n); // 가장 큰 숫자
  const numberIdxs = {}; // 숫자별 index 저장용
  numberIdxs[1] = 0;

  let direction = 'down'; // 방향 - 'down' | 'up' | 'right'
  let count = n - 1; // 채워야 할 숫자 개수
  let currCount = 0; // 현재 채운 숫자 개수
  let indecrease = 1;
  let idx = 0;

  for (let num = 2; num <= N; num++) {

    
    if (direction === 'down' || direction === 'up') {
      idx += indecrease;
      numberIdxs[num] = idx;
      currCount++;
      indecrease++;
    } else {
      idx += 1;
      numberIdxs[num] = idx;
      currCount++;
    }
  
    
    // 채우기 멈춤 조건
    if (currCount === count) {
      // 뱡향 전환
      direction =
        direction === 'down' ? 'right' : direction === 'right' ? 'up' : 'down';
      
      // 채울 개수
      count = num < n * 2 - 1 ? n - 1 : count -1
      currCount = 0;

      // 증감수 ('right' 제외)
      indecrease =
        direction === 'down'
          ? Math.abs(indecrease)
          : direction === 'up'
            ? indecrease * -1
            : indecrease;
    }
     
  }
  const answer = Object.entries(numberIdxs).sort((a,b)=> a[1] - b[1]).map((arr)=> Number(arr[0]))
  return answer;
}
