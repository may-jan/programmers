function solution(s) {
    var answer = [];
    const arr = s.split(" ");
    arr.map((str) => {
        let newStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        answer.push(newStr);
    })
    return answer.join(" ");
}