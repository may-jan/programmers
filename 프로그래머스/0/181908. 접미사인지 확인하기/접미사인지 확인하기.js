function solution(my_string, is_suffix) {
    return my_string.split(is_suffix)[1] == "" ? 1 : 0;
}