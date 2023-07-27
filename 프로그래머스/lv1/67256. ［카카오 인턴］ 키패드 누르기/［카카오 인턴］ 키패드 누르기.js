function solution(numbers, hand) {
  let keyboard = [['*', 0, '#'], [7, 8, 9], [4, 5, 6], [1, 2, 3]];
  let leftHand = [0, 0]; // (왼손 초기 위치)
  let rightHand = [2, 0]; // (오른손 초기 위치)
  let answer = "";

  for (let num = 0; num < numbers.length; num++) {
    for (let y = 0; y < keyboard.length; y++) {
      const x = keyboard[y].indexOf(numbers[num]);
      if (x === -1) continue;
      if (x === 0) {
        leftHand = [x, y];
        answer += 'L';
          break
      } else if (x === 2) {
        rightHand = [x, y];
        answer += 'R';
        break
      } else if (x === 1) {
        const leftDiff = Math.abs(leftHand[0] - x) + Math.abs(leftHand[1] - y)
        const rightDiff = Math.abs(rightHand[0] - x) + Math.abs(rightHand[1] - y);
        if (leftDiff < rightDiff) {
          leftHand = [x, y];
          answer += 'L';   
        } else if (leftDiff > rightDiff) {
          rightHand = [x, y];
          answer += 'R';
        } else {
          if (hand === "right") {
            rightHand = [x, y];
            answer += 'R';
          } else {
            leftHand = [x, y];
            answer += 'L';
          }
        }
        break
      }
    }
  }

  return answer;
}


