function solution(progresses, speeds) {
    var answer = [];
    const days = [];
    progresses.forEach((pro, idx) => {
        days.push(Math.ceil((100 - pro) / speeds[idx]));
    });
    let day = days[0];
    let temp = 0;
    for(let i=0; i<days.length; i++){
        if(day >= days[i]) temp+=1;
        if(day < days[i]){
            answer.push(temp);
            temp = 0;
            day = days[i];
            temp += 1;
        };
    };
    answer.push(temp);
    return answer;
}