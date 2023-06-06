function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    for (const y of can) {
      babbling[i] = babbling[i].replaceAll(y, '');
    }
  }
  return babbling;
}


