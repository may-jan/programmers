function solution(my_string) {
    var answer = 0;
    const reg = /[a-zA-z]/
    const filtering = my_string.split(reg).filter((a) => a !== "");
    filtering.forEach((num)=> answer+= Number(num));
    return answer
}