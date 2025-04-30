function solution(todo_list, finished) {
    var answer = [];
    finished.forEach((check, idx)=>{
        if(check == false) answer.push(todo_list[idx])       
    })
    return answer;
}