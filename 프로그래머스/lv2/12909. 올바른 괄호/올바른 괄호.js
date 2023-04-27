function solution(s){
    let cnt = 0;
    if(s[0] === ')' || s.length===1 ){return false}
    for(let x of s){
        if( x === '('){
           cnt++
        }else {
            if(cnt < 1){
                return false
            }
            cnt--
        }
    }
    
 return cnt === 0 ? true : false
}