function solution(word) {
    var answer = 0;
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const temp = [781, 156, 31, 6, 1];
    for(let i=0; i<word.length; i++){
        const idx = alphabets.indexOf(word[i]);
        answer += idx * temp[i] + 1;
    }
    return answer;
}
