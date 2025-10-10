function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i++){
        answer.push(new Array(i).fill(0));
    }
    
    // 방향 벡터
    let down = [1, 0];
    let right = [0, 1];
    let up = [-1, -1];
    
    let x = 0, y = 0; // 시작 위치
    let num = 1;      // 1부터 시작
    let dir = 0;      // 방향 인덱스 (0: 아래, 1: 오른쪽, 2: 위-왼쪽)
    let dirs = [down, right, up]; // 방향 배열
    
    while(num <= (n*(n+1))/2) { // 삼각형 전체 숫자 개수만큼 반복
        answer[x][y] = num;
        num++;
    
        let nx = x + dirs[dir][0];
        let ny = y + dirs[dir][1];
    
        // 다음 위치가 없거나 이미 채워져 있으면
        if(!answer[nx] || answer[nx][ny] !== 0) { 
            dir = (dir + 1) % 3;    // 방향전환
            nx = x + dirs[dir][0];  // 전환한 방향으로 좌표 변경
            ny = y + dirs[dir][1]; 
        }
        x = nx;
        y = ny;
    }    
    return answer.flat();
}