function solution(ingredient) {
    // 빵(1) – 야채(2) – 고기(3) - 빵(1)
    // stack에 하나씩 더해서 1231이 나올 때마다 1231 빼내고 카운트
    let count = 0; // 포장 카운트
    let stack = [] // 재료 쌓는 스택

  for (let i = 0; i < ingredient.length; i++) {
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            // slice로 거르는 대신 pop으로 필요한 것만 제거시키면?
            stack.pop(); // '1' 제거
            stack.pop(); // '2' 제거
            stack.pop(); // '3' 제거
            stack.pop(); // '1' 제거
            count++;
        }

        stack.push(ingredient[i]);
      
    }

    // 남은 재료로 마지막 패턴 확인
    while (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
        stack.pop(); // '1' 제거
        stack.pop(); // '2' 제거
        stack.pop(); // '3' 제거
        stack.pop(); // '1' 제거
        count++;
    }

    return count;
}