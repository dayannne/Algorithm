function solution(n) {
  let num = 1;
  let fac = 1;
  function factorial(n, fac, num) {
    if (fac > n) {
      return num - 2;
    }
    return factorial(n, fac * num, num + 1);
  }
  return factorial(n, fac, num);
}