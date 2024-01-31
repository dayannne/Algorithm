// https://app.codility.com/demo/results/training3M72YM-J54/

function solution(S, P, Q) {
  let result = [];
  let nucleotides = ['A', 'C', 'G', 'T'];

  for (let i = 0; i < P.length; i++) {
    let slicedS = S.slice(P[i], Q[i] + 1);

    for (let j = 0; j < nucleotides.length; j++) {
      if (slicedS.indexOf(nucleotides[j]) !== -1) {
        result.push(j + 1);
        break;
      }
    }
  }

  return result;
}
