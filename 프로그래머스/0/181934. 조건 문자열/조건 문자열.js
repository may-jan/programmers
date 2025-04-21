function solution(ineq, eq, n, m) {
    var answer = 0;
    ineq == ">" ?
        (eq == "=" ?
            answer = n>=m : answer = n>m)
    :(eq == '=' ?
            answer = n <=m : answer = n<m)
    return answer == true ? 1 : 0;
}