function solution(arr, delete_list) {
    var answer = [];
    arr.forEach((num)=>{
        if(!delete_list.includes(num)) answer.push(num);
    })
    return answer;
}