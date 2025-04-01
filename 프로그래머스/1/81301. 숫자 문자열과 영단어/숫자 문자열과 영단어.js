function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers.forEach((num, idx) => {
        if(s.includes(num)){
             s = s.replaceAll(num, idx);
        };
    });
    return Number(s);
}