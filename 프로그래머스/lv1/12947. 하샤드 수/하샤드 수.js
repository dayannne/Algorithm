function solution(x) {
    let s = x.toString();
    let sum = 0
    for(const num of s){
        sum += Number(num)
    }
    return x%sum === 0 ? true : false;
}