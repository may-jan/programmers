function solution(n) {
    var answer = 0;
    const isInteger = (Number.isInteger(Math.sqrt(n)));
    answer = isInteger ? (Math.sqrt(n)+1) ** 2 : -1;
    return answer;
}