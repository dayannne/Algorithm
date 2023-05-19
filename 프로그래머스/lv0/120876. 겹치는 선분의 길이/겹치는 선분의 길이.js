function solution(lines) {
  let answer = 0;
  const linesArr = lines.map(([start, end]) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index)
  );

  for (let i = 0; i < linesArr.length; i++) {
    const currentLine = linesArr[i];

    for (let j = i + 1; j < linesArr.length; j++) {
      const cntOverlap = linesArr[j].filter(dot => currentLine.includes(dot));

      if (cntOverlap.length >= 1) {
        answer++;
      }
    }
  }

  return answer;
}
