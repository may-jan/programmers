function solution(myString, pat) {
    const replaceStr = myString.replaceAll(pat, '-');
    const lastIdx = replaceStr.lastIndexOf("-");
    const sliceStr = replaceStr.slice(0, lastIdx+1);
    return sliceStr.replaceAll('-', pat);
}