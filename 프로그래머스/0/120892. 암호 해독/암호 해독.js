function solution(cipher, code) {
    var answer = '';    
    for(let i=1; i<=cipher.length; i++){
        if(code * i <= cipher.length){
           answer += cipher[code * i -1]
        }
    }
    return answer;
}