function solution(balls, share) {
  // 조합 공식 nCr = n! / (r! * (n-r)!)
  let n = 1;
  let r = 1;
  for (let i = balls; i > balls - share; i--) {
    n *= i;
  }
  for (let i = share; i > 0; i--) {
    r *= i;
  }
  return n / r;
}