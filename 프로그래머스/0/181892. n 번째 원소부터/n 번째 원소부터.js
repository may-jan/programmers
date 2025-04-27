function solution(num_list, n) {
    var answer = [];
    num_list.forEach((num, idx) => {
        if(idx+1 >= n) answer.push(num) 
    })
    return answer;
}