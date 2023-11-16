function solution(today, terms, privacies) {
    const answer = [];
    today = new Date(today);
    terms = terms.map(s => s.split(' '));
    privacies = privacies.map(s => s.split(' '));
    
    for (const x of terms) {
        for (let i = 0; i < privacies.length; i++) {
            let maturityDate = new Date(privacies[i][0]); // 날짜 형식 수정
            maturityDate.setFullYear(maturityDate.getFullYear() + Math.floor((maturityDate.getMonth() + parseInt(x[1])) / 12)); // 연도 설정
            maturityDate.setMonth((maturityDate.getMonth() + parseInt(x[1])) % 12); // 월 설정
            if (x[0] === privacies[i][1] && maturityDate <= today) {
                answer.push(i + 1);
            }
        }
    }
    
    return answer.sort((a,b)=>a-b);
}
