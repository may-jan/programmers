function solution(lines) {
    const min = Math.min(lines[0][0], lines[1][0], lines[2][0]);
    const max = Math.max(lines[0][1], lines[1][1], lines[2][1]);
    if(min<0){
        lines = lines.map((line) => [line[0]-min, line[1]+Math.abs(min)])
    }
    
    const arr = new Array(Math.abs(min)+max).fill(0);
    lines.forEach((line) => {
        let [start, end] = line;
        for(let i=start; i<end; i++){
            arr[i]++;
        }
    })
    
    return arr.filter((a) => a>1).length;
}