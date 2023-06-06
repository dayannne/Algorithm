function solution(common) {
    let plus = common[1] - common[0]
    let multiply = common[1] / common[0]
    
    if(common[2]-common[1] === plus){
       return common[common.length-1] + plus
    }if(common[2]/common[1] === multiply){
        return common[common.length-1] * multiply
    }
}