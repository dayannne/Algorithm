function solution(sizes) {
    let copyArr = sizes.map(arr=>arr.sort((a,b)=> b-a));
let maxWidth = 0
let maxHeight = 0
for(let x of copyArr){
    maxWidth = x[0] > maxWidth ? x[0] : maxWidth
    maxHeight = x[1] > maxHeight ? x[1] : maxHeight
}
return maxWidth * maxHeight

}