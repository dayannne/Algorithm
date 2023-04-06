function solution(emergency) {
  //배열 복제
    let copy = emergency.slice();
    //배열 내림차순 정렬
    copy = copy.sort((a,b)=> b-a);
    //맞는 인덱스값 +!
    for(let i = 0; i < emergency.length;i++){
        emergency[i] = copy.indexOf(emergency[i])+1
    }
    return emergency
}