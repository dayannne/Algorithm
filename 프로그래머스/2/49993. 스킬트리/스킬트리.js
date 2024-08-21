function solution(skill, skill_trees) {
    let count = 0;
    const regex = new RegExp(`[^${skill}]`, 'g');
    return skill_trees
            .map((skillTree) => skillTree.replaceAll(regex,''))
            .filter((x) => {
                return skill.indexOf(x) === 0 ;
            })
            .length

}