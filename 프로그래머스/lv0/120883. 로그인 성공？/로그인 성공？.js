function solution(id_pw, db) {
  var found = db.find((info) => info[0] === id_pw[0] && info[1] === id_pw[1]);
  if (found) {
    return 'login';
  } else if (db.find((info) => info[0] === id_pw[0])) {
    return 'wrong pw';
  } else {
    return 'fail';
  }
}