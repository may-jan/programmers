function solution(emergency) {
    var answer = [];
    const sortedArr = [...emergency].sort((a,b) => b-a);
    sortedArr.forEach((num,i) => {
        const idx = emergency.indexOf(num);
        answer[idx] = i+1;
    })
    return answer;
}