function solution(a, b) {
    // 내 풀이
    // const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    // let date = new Date(`2016-${a}-${b}`);
    // return day[date.getDay()];
    
    // 다른 풀이
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    let days = b
    for(let i=0 ; i<a-1 ; i++)
        days += monthDay[i];

    return weekDay[days%7];
}