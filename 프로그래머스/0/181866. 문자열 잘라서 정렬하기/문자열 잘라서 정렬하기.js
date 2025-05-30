function solution(myString) {
    const changeArr = myString.split("x").filter((str)=>str.length!=0);
    const sortedArr = changeArr.sort((a,b)=>a.localeCompare(b));
    return sortedArr;
}