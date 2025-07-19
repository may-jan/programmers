function solution(before, after) {
    const splitedBe = before.split("").sort().join("");
    const splitedAf = after.split("").sort().join("");
    
    return splitedBe == splitedAf ? 1 : 0;
}