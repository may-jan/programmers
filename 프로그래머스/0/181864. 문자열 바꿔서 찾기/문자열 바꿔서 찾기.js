function solution(myString, pat) {
    var answer;
    let strArr = [];
    myString.split("").map((str, idx)=>{
        myString[idx] === "A" ? strArr.push("B") : strArr.push("A")
    })
    answer = strArr.join("").includes(pat) ? 1 : 0;
   
    return answer;
}