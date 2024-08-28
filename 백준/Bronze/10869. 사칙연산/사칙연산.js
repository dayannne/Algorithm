// A+B, A-B, A*B, A/B(몫), A%B(나머지)

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = input[0].split(' ')

const a = parseInt(line[0])
const b = parseInt(line[1])

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)