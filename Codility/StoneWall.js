// https://app.codility.com/demo/results/trainingMFAA34-374/

function solution(H) {
  const stack = [H[0]];
  let answer = 0;
  for (let i = 0; i < H.length; i++) {
    while (stack.length !== 0) {
      if (H[i] < stack[stack.length - 1]) {
        stack.pop();
        answer++;
      } else if (H[i] > stack[stack.length - 1]) {
        stack.push(H[i]);
        break;
      } else break;
    }
    if (stack.length === 0) stack.push(H[i]);
  }
  return answer + stack.length;
}
