function solution(A,B){
    A = A.sort((a,b)=>a-b)
    B = B.sort((a,b)=>b-a)
    let answer = A.map((n,i)=> n * B[i]).reduce((a,c)=> a+c)

    return answer;
}