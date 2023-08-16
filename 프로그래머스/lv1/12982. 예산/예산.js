function solution(d, budget) {
const sorted = d.sort((a,b) => a-b)
let currBudget = budget
let cnt = 0 
for(const x of sorted){
    if(currBudget - x < 0){
        break
    }
    currBudget -= x
    cnt++
    
}

return cnt
}