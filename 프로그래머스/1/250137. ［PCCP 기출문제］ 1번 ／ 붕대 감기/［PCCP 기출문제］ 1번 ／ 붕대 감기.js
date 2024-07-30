function solution(bandage, health, attacks) {
    const lastAttack = attacks[attacks.length-1][0]
    let hp = health
    let atttackIdx = 0
    let recoveryTime = 0
    
    for(let i = 1 ; i <= lastAttack ; i++){
        const attackTime = attacks[atttackIdx][0]

        // 공격
        if(attackTime === i){
            const damage = attacks[atttackIdx][1]
            hp -= damage
            atttackIdx++
            recoveryTime = 0
        }
        // 회복
        else{
            if(hp < health){
                recoveryTime++
                // 회복 연속 성공
                if(recoveryTime === bandage[0]) {
                    hp = hp + bandage[1] + bandage[2] <= health ? hp + bandage[1] + bandage[2] : health
                    recoveryTime = 0
                }
                // 일반 회복
                else hp = hp + bandage[1] <= health ? hp + bandage[1] : health
            }
        }
        if(hp <= 0) return -1
    }

    return hp;
}