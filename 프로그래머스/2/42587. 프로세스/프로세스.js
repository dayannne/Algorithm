function solution(priorities, location) {
  const N = priorities.length;
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let answer = 0;

  while (queue.length > 0) {
    const { priority, index } = queue.shift();
    if (queue.some((doc) => doc.priority > priority)) {
      queue.push({ priority, index });
    } else {
      answer++;
      if (index === location) {
        return answer;
      }
    }
  }

  return answer;
}
