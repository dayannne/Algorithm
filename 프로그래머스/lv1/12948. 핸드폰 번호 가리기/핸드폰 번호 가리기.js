function solution(phone_number) {
    var num = phone_number.slice(-4,phone_number.length);
    return '*'.repeat(phone_number.length-4)  + num;
}