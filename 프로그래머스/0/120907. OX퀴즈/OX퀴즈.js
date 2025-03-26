function solution(quiz) {
    var answer = [];
    quiz.map((item)=>{
        const arr = item.split(" ");
        const cal = arr[1] === "-" ? Number(arr[0])-Number(arr[2]) : Number(arr[0])+Number(arr[2])
        cal == arr[arr.length-1] ? answer.push("O") : answer.push("X");

    })
    return answer;
}