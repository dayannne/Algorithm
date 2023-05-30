function solution(bin1, bin2) {
  let currBin = [];
  let carry = 0;
  const maxLen = Math.max(bin1.length, bin2.length);

  for (let i = 0; i < maxLen; i++) {
    const sum =
      carry +
      (i < bin1.length ? parseInt(bin1[bin1.length - 1 - i]) : 0) +
      (i < bin2.length ? parseInt(bin2[bin2.length - 1 - i]) : 0);
    currBin.unshift((sum % 2).toString());
    carry = Math.floor(sum / 2);

  }

  if (carry > 0) {
    currBin.unshift(carry.toString());
  }

  return currBin.join("");
}