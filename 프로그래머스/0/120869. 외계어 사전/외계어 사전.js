function solution(spell, dic) {
    for(let word of dic){
        let check = spell.every(c => word.includes(c));
        if(check && word.length === spell.length) return 1;
    }
    return 2;
}