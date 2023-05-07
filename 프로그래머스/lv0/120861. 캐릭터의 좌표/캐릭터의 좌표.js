function solution(keyinput, board) {
  let currPoint = board.map(n => ~~(n/2))
  let answer = [0, 0];

  for(let x of keyinput) {
    if(x.trim() === 'right') {
      if(currPoint[0]+1 < board[0]) {
        currPoint[0]++;
        answer[0]++;
      }   
    }
    if(x.trim() === 'left') {
      if(currPoint[0]-1 >= 0) {
        currPoint[0]--;
        answer[0]--;
      }   
    }
    if(x.trim() === 'up') {
      if(currPoint[1]+1 < board[1]) {
        currPoint[1]++;
        answer[1]++;
      }   
    }
    if(x.trim() === 'down') {
      if(currPoint[1]-1 >= 0) {
        currPoint[1]--;
        answer[1]--;
      }   
    }
  }
  return answer;
}
