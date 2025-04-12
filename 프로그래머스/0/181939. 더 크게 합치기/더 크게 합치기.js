function solution(a, b) {
    var answer = [];
    const strings = [String(a), String(b)];
    answer[0] = Number(strings.join(""));
    answer[1] = Number(strings.reverse().join(""));
    return Math.max(...answer);
}