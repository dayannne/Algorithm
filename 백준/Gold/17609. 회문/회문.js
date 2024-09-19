const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const words = input.slice(1, N + 1);

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let start = 0;
  let end = word.length - 1;
  let deleted = [];

  while (start < end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else {
      // start+1부터 end까지가 회문인지 확인
      if (isPalindrome(word, start + 1, end)) {
        deleted.push(word[start]);
        start++;
      }
      // start부터 end-1까지가 회문인지 확인
      else if (isPalindrome(word, start, end - 1)) {
        deleted.push(word[end]);
        end--;
      } else {
        // 두 문자를 삭제해야만 회문이 되는 경우
        deleted.push(word[start]);
        deleted.push(word[end]);
        break;
      }
    }
  }

  const answer = deleted.length === 0 ? 0 : deleted.length === 1 ? 1 : 2;
  console.log(answer);
}
