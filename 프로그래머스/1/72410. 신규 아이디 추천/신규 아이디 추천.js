function solution(new_id) {
    let id = new_id
    
    id = id.toLowerCase() // 1단계
    id = id.replaceAll(/[^a-z0-9\-_.]/g, ""); // 2단계
    id = id.replaceAll(/\.{2,}/g, '.') //3단계
    id = id.replace(/(^\.|\.$)/g, ''); //4단계
    id = id.length === 0 ? 'aaa' : id // 5단계
    id = id.length >= 16 ? id.substr(0,15).replace(/(^\.|\.$)/g, '') : id // 6단계
    // 7단계
    if(id.length < 3) {
        while (id.length < 3) {
            id += id[id.length - 1];
        }
    }

    return id;
}