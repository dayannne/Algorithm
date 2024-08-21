function solution(skill, skill_trees) {
    let count = 0;
    const lookup = {}
    
    for(let i = 0 ; i < skill.length ; i++){
        lookup[skill[i]] = i
    }
    
    const regex = new RegExp(`[^${skill}]`, 'g');
    skill_trees = skill_trees.map((skillTree) => skillTree.replaceAll(regex,''))

    for(const skill_tree of skill_trees){
        let isValid = true
        for(let i = 0 ; i < skill_tree.length ; i++){
            if(lookup[skill_tree[i]] !== i) isValid = false
        }
        if(isValid) count++
    }
    return count;
}