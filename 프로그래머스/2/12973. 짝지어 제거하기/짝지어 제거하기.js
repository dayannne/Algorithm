function solution(s){
    const arr = []
    for(const alphabet of s){
        if(arr.length === 0) arr.push(alphabet)
        else if(arr[arr.length-1] === alphabet) arr.pop()
        else arr.push(alphabet)
    }

    return arr.length === 0 ? 1 : 0
}

// 시간초과
// function solution(s)
// {
//     let copyS = s;
//     let length = copyS.length
//     while(length !== 0){
//         for(let i = 0 ; i < copyS.length - 1 ; i++){
//             if(copyS[i] === copyS[i+1]){
//                 copyS = copyS.replaceAll(copyS[i] + copyS[i], '')
//                 break
//             }
//         }

//         if(copyS.length === length) return 0
//         else length = copyS.length
//     }

//     return copyS.length === 0 ? 1 : 0;
// }