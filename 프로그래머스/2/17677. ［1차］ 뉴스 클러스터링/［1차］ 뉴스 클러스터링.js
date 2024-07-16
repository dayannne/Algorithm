function solution(str1, str2) {
    // 알파벳 이외의 문자를 제거하는 정규식
    const reg = /[^a-zA-Z]/g;
    let text1 = str1.toUpperCase();
    let text2 = str2.toUpperCase();
    const lookup1 = {};
    const lookup2 = {};

    // 문자열 쌍 생성
    for (let i = 0; i < text1.length - 1; i++) {
        const sub = text1.substring(i, i + 2).replace(reg, '');
        if (sub.length === 2) lookup1[sub] = (lookup1[sub] || 0) + 1;
    }
    for (let i = 0; i < text2.length - 1; i++) {
        const sub = text2.substring(i, i + 2).replace(reg, '');
        if (sub.length === 2) lookup2[sub] = (lookup2[sub] || 0) + 1;
    }

    // 교집합 및 합집합 계산
    let intersection = 0;
    let union = 0;
    const allKeys = new Set([...Object.keys(lookup1), ...Object.keys(lookup2)]);

    allKeys.forEach(key => {
        const count1 = lookup1[key] || 0;
        const count2 = lookup2[key] || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });

    // Jaccard 유사도 계산
    const answer = union === 0 ? 65536 : Math.floor(intersection / union * 65536);
    return answer;
}
