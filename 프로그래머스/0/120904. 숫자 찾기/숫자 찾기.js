function solution(num, k) {
    var answer = 0;
    const arr = String(num).split("");
    answer = arr.findIndex((n) => n == k);
    return answer >= 0  ? answer+1 : answer;
}