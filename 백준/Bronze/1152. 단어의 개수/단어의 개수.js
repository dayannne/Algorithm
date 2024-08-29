const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input[0].trim();

if (str.replaceAll(' ', '') === '') console.log(0);
else console.log(str.split(' ').length);
