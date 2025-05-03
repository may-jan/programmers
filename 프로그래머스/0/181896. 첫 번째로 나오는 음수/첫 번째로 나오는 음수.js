function solution(num_list) {
    var answer = [];
    num_list.forEach((num, idx)=>{
        if (num < 0) answer.push(idx);
    });
    return answer.length == 0 ? -1 : answer[0];
}