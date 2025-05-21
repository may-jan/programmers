function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach((arr) => {
        var score = 0;
        arr.forEach((people) => {
            for(let i=0; i<name.length; i++){
            if(people == name[i]) score += yearning[i]
            }
        })
        answer.push(score)
    })
    
    return answer;
}