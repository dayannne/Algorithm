function solution(s1, s2) {
    let count = 0;
    for(let x of s1)
    if(s2.includes(x)) count++;
    return count
}