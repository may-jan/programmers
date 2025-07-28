function solution(s) {
    var answer = [];
    let tuples = s.slice(2, -2).split("},{").sort((a,b) => a.length - b.length);
    tuples.forEach((t) => {
        const tuple = t.split(",");
        tuple.forEach((num) => {
            if(!answer.includes(num)) answer.push(num);
        })
    })
    return answer.map((a) => Number(a));
}