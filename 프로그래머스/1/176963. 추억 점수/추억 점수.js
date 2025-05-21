function solution(name, yearning, photo) {
    let score = {};
    for(let i = 0; i < name.length; i++){
        score[name[i]] = yearning[i];
    }
    
    return photo.map(value => value.map(v => score[v] ? score[v] : 0).reduce((acc,cur) => acc + cur,0));
}