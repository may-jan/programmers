function solution(my_string, queries) {
    let arr = [...my_string];
    for(const [start, end] of queries){
        const reversed = arr.slice(start, end+1).reverse();
        arr.splice(start, end-start+1, ...reversed);
    }
    return arr.join("");  
}