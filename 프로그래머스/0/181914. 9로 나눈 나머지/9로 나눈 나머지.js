function solution(number) {
    const addNum = number.split("").reduce((acc, cur)=> Number(acc)+Number(cur));
    return addNum % 9;
}