function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        const filtered = arr.slice(s, e+1).filter(v => v > k);
        filtered.length ? answer.push(Math.min(...filtered)) : answer.push(-1);
    });
    return answer;
}