function solution(board) {
    const n = board.length
 const copyArr = JSON.parse(JSON.stringify(board)); //깊은 복사

  const x = [-1, -1, -1, 0, 0, 1, 1, 1];
  const y = [-1, 0, 1, -1, 1, -1, 0, 1];
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(!board[i][j]){
                continue
            }
            for(let k = 0; k < x.length; k++){
                const nx = i + x[k]
                const ny = j + y[k]
                if(0<= nx && nx < n && 0<= ny && ny < n){
                   copyArr[nx][ny] = 1
                }
            }
            
        }
            
    }
  const mineCnt = copyArr.flat().filter(d => d).length;
    return n * n - mineCnt;
}