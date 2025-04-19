function solution(my_string, overwrite_string, s) {
    let strArr = [...my_string];
    let overwriteIdx = 0;
    for(let i=s; i<s+overwrite_string.length; i++){
        if(overwriteIdx > overwrite_string.length) return;
        strArr[i] = overwrite_string[overwriteIdx];
        overwriteIdx += 1;
    }
    return strArr.join("");
}