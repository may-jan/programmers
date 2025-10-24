function solution(x1, x2, x3, x4) {
    var answer = true;
    const case1  = x1 == true || x2 == true ? true : false;
    const case2 = x3 == true || x4 == true ? true : false;
    return case1 == true && case2 == true ? true : false;
}