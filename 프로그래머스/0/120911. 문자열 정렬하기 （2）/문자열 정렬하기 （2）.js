function solution(my_string) {
    const stringArr = my_string.toLowerCase().split("");
    stringArr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    return stringArr.join("");
}