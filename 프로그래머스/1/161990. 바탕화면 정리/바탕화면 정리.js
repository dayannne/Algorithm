function solution(wallpaper) {
    // 행에서 처음 등장하는 파일의 행과 열에서 처음 등장하는 파일의 열을 합침
    // 행에서 마지막에 등장하는 파일의 행과 열에서 마지막으로 등장하는 파일의 열을 합침
    
    let answer = [];
    const startPoint = [50,50]
    const endPoint = [0,0]
    // 행 순환
    for(let row = 0 ; row < wallpaper.length ; row++){
        if(wallpaper[row].indexOf('#') > -1){
            for(let col = 0 ; col < wallpaper[row].length ; col++){
               if(wallpaper[row][col]=== '#'){
                   if(row < startPoint[0]) startPoint[0] = row
                   if(col < startPoint[1]) startPoint[1] = col
                   if(row+1 > endPoint[0]) endPoint[0] = row+1
                   if(col+1 > endPoint[1]) endPoint[1] = col+1

               }
               
           }
        }
        
    }
    answer = [...startPoint,...endPoint]
    
    return answer;
}