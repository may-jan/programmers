function solution(id_pw, db) {
    let answer = "fail";
    for(let i=0; i<db.length; i++){
        const [id, pw] = db[i];
        if(id == id_pw[0] && pw == id_pw[1]){
            answer = "login";
            return answer;
        }else if(id == id_pw[0] && pw != id_pw[0]){
            answer = "wrong pw";
        }
    }
    return answer;
}