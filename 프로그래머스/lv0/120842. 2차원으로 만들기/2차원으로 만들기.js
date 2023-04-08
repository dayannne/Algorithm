function solution(num_list, n) {
  const result = [];

  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n));
  }

  return result;
}