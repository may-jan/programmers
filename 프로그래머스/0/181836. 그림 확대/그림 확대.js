function solution(picture, k) {
    var answer = [];
    for(let i=0; i<picture.length; i++){
        const str = picture[i];
        let newStr = '';
        let cnt = 0;
        for(let j=0; j<str.length; j++){
            newStr += str[j].repeat(k);
        }
        while(cnt < k){
            answer.push(newStr);
            cnt++;
        }
    }
    return answer;
}