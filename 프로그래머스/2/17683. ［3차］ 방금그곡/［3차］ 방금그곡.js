function timeFilter(str) {
    const [h, m] = str.trim().split(':').map(Number);
    return h * 60 + m;
}

function makeScore(playTime, score) {
    let length = score.length;
    let newScore = '';
    
    // 음악 길이가 재생 시간보다 짧으면 반복 재생
    for (let i = 0; i < playTime; i++) {
        newScore += score[i % length];
    }

    return newScore;
}

function solution(m, musicinfos) {
    let answer = [];
    
    // # 처리
    let M = m.replaceAll('C#', 'H').replaceAll('D#', 'I').replaceAll('F#', 'J')
             .replaceAll('G#', 'K').replaceAll('A#', 'L').replaceAll('B#', 'M');

    musicinfos.forEach(musicinfo => {
        let [start, end, title, score] = musicinfo.trim().split(',').map(str => str.trim());
        start = timeFilter(start);
        end = timeFilter(end);
        score = score.replaceAll('C#', 'H').replaceAll('D#', 'I').replaceAll('F#', 'J')
                .replaceAll('G#', 'K').replaceAll('A#', 'L').replaceAll('B#', 'M');
       
        const playTime = end >= start ? end - start : (1440 - start) + end;  // 재생 시간 계산
        const newScore = makeScore(playTime, score); // 음악 재생 길이만큼 score 생성
        
        // 멜로디가 정확히 일치하는지 확인 (중간 시작 포함)
        if (newScore.includes(M) && newScore.indexOf(M) <= (newScore.length - M.length)) {
            answer.push([title, playTime, start]);
        }
    });

    // 재생 시간을 기준으로 내림차순 정렬, 같으면 시작 시간을 기준으로 오름차순
    answer.sort((a, b) => b[1] - a[1] || a[2] - b[2]);

    return answer.length ? answer[0][0] : "(None)";
}
