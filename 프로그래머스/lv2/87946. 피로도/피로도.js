function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(0);

  const tryDungeon = (k, count) => {
    answer.push(count);
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = 1;
        tryDungeon(k - dungeons[i][1], count + 1);
        visited[i] = 0;
      }
    }
  }

  tryDungeon(k, 0);
  return Math.max(...answer);
}
