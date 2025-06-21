function solution(s, n) {
    var answer = '';
    s.split("").forEach((al) => {
        if(al != " "){
            const alCode = al.charCodeAt();
            let code;
            if(alCode >= 97 && alCode <=122){
                alCode+n > 122 ? code = alCode+n-26 : code = alCode+n;
            }else if(alCode >= 65 && alCode <=90){
                alCode+n > 90 ? code = alCode+n-26 : code = alCode+n;
            }
            answer += String.fromCharCode(code);
        }else{
            answer += " ";
        }    
    });
    return answer;
}