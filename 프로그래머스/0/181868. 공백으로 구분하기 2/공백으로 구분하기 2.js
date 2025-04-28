function solution(my_string) {
    var answer = [];
    const stringArr = my_string.trim().split(" ");
    stringArr.forEach((str) => {
        if(str !== "") answer.push(str)
    })
    return answer;
}