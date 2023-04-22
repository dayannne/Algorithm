function solution(my_string) {
  let new_string = "";
  for(let x of my_string) {
    if(x.toUpperCase() === x) {
      new_string += x.toLowerCase();
    } else {
      new_string += x.toUpperCase();
    }
  }
  return new_string;
}