function solution(arr) {
    var answer = [];
    let row = arr.length;
    let col = arr[0].length;
    const size = Math.max(row, col);
    if(row == col) return arr;
    
    for(let i=0; i<size; i++){
        arr[i] ? answer.push(arr[i]) : answer.push(new Array(size).fill(0));
        let colSize = col;
        while(colSize < size){
            arr[i].push(0);
            colSize ++;
        }
    }
    
    return answer;
}