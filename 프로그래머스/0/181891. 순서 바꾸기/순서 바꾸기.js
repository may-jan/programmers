function solution(num_list, n) {
    var answer = [];
    let idx = n;
    while(num_list.length !== answer.length){ 
        if(idx == num_list.length) idx = 0;
        answer.push(num_list[idx]);
        idx ++;
    }
    return answer;
}