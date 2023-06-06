function solution(A, B) {
  if (A === B) return 0;

  const copyB = B.split('');
let cnt = 0
  for (let i = 0; i < copyB.length; i++) {
    copyB.push(copyB.shift());
       cnt++
    if (copyB.join('') === A) {
        break
    }
  }

  return cnt === copyB.length  ? -1 : cnt;
}
