function solution(my_string, letter) {
    return my_string.includes(letter) ? my_string.replaceAll(letter,"") : my_string;

}