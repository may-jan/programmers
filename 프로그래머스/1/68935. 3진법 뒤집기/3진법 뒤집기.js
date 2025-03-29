function solution(n) {
    // toString (10진법 -> n진법)
    // parseInt (n진법 -> 10진법)
    return parseInt((n.toString(3).split("").reverse().join("")), 3);
}