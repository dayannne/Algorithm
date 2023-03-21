function solution(n) {
  let count= 0;
    while(n-(count*7)>0){
        ++count
    }
    return count;
}