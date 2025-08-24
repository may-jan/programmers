function solution(maps){
    let n = maps.length;
    let m = maps[0].length;
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let queue = [[0, 0]];

    while(queue.length){
        let [x, y] = queue.shift();
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];

            // 범위+벽 체크
            if(nx>=0 && ny>=0 && nx<n && ny<m && maps[nx][ny] === 1){
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    let answer = maps[n-1][m-1];
    return answer === 1 ? -1 : answer;
}
