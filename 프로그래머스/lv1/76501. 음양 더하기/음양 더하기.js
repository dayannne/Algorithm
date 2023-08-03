function solution(absolutes, signs) {
   for(let i = 0 ; i < signs.length ; i++){
       if(!signs[i]){
           absolutes[i] *= -1
       }
   }
    return absolutes.reduce((acc,cur) => acc + cur);
}