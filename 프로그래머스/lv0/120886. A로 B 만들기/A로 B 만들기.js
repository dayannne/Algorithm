function solution(before, after) {

  for (const x of after) {
    if (before.indexOf(x) !== -1) {
      after = after.replace(x, '');
              before = before.replace(x, '');
    }
  }
  return after ? 0 : 1;
}
