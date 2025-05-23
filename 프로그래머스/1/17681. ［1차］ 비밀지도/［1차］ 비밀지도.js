function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        let changeStr = "";
        const merge = arr1[i] | arr2[i]
        const str = merge.toString(2).padStart(n,"0");
        for(let j=0; j<n; j++){
            str[j] == "1" ? changeStr += "#" : changeStr += " ";
        }
        answer.push(changeStr)
    }
    return answer;
}