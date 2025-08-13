function solution(skill, skill_trees) { 
    let answer = 0;
    const splited = skill.split("");
    const trimSkill = skill_trees.map(s => s.split("").filter(char => splited.includes(char)).join(""));
    trimSkill.forEach((tree) => {
        if(skill.startsWith(tree)) answer += 1;
    })
    
  return answer;
}