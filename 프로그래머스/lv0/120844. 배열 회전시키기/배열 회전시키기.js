function solution(numbers, direction) {
    let answer = numbers
    let str = ''
   if (direction === 'right'){
       str = answer.pop();
       answer.unshift(str)
   
   }else
   {str = answer.shift();
    answer.push(str)

}return answer
}