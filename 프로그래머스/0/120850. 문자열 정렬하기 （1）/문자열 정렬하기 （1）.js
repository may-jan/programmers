function solution(my_string) {
    var answer = [];
    my_string.split("").forEach((txt) => {
        if(!isNaN(Number(txt))){
            answer.push(Number(txt));
        };
    });
    answer.sort((a,b) => a-b);
    return answer;
}