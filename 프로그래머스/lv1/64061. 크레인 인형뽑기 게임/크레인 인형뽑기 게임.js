function solution(board, moves) {
 const basket = [];
  let count = 0;
  // moves의 길이만큼 작동하는 for문
  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] === 0) {
        continue;
      } else {
        basket.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        break;
      }
    }
    if (basket.length >= 2) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        count += 2;
      }
    }
  }
  return count;
}