function solution(num_list, n) {
    var answer = [];
    num_list.forEach((num,idx)=>{
        if(idx < n) answer.push(num);
    });
    return answer;
}