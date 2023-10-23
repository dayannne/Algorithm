function solution(babbling) {
    let answer = 0;
    const bab = ["aya", "ye", "woo", "ma"] 

    for( const x of babbling){
        let word = x;
        let prev = '';
        while(word.length > 0){
            let foundMatch = false;
            for(const y of bab){
                if(word.startsWith(y) && prev !== y){
                    word = word.replace(y,'');
                    prev = y;
                    foundMatch = true;
                    break;
                }
            }
            if(!foundMatch){ 
                break;
            }
        }

        if(word.length === 0) {
            answer++;
        }
    }

    return answer;
}
