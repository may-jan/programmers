function solution(my_string, indices) {
    var answer = [...my_string];
    indices.forEach((idx)=>{
        answer[idx] = "";
    });
    return answer.join("");
}