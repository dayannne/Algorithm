function solution(hp) {
    const generalAnt = 5;
    const soldierAnt = 3;
    const singleAnt = 1;
    
    let antCount = 0;

  while (hp > 0) {
    if (hp >= generalAnt) {
      hp -= generalAnt;
      antCount += 1;
    } else if (hp >= soldierAnt) {
      hp -= soldierAnt;
      antCount += 1;
    } else {
      hp -= singleAnt;
      antCount += 1;
    }
  }

  return antCount;
}