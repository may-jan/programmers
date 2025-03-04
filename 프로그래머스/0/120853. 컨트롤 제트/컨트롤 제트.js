function solution(s) {
    var answer = 0;
    const arr = s.split(" ");
    arr.map((num, idx) => {
        answer = num === "Z" ? answer-parseInt(arr[idx-1]) : answer+parseInt(num);
    })
    return answer;
}