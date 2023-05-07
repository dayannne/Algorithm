function solution(polynomial) {
    const arr = polynomial.split(' + ');
    let xNum = 0
    let num = 0
    for(let str of arr){
        if(str.includes('x')){
            xNum += str.replace('x','') ? parseInt(str.replace('x','')) : 1
        }else{
            num += parseInt(str)
        }
    }
    let answer = []
    if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);
    return answer.join(" + ");
}