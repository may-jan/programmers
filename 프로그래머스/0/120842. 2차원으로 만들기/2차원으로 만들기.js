function solution(num_list, n) {
    var answer = [];
    const num = num_list.length / n;
    for(let i=0; i<num_list.length; i+=n){
        const sliceNum = num_list.slice(i, i+n);
        answer.push(sliceNum);
    }
    return answer;
}