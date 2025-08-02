function solution(dirs) {
    let [x, y] = [0, 0];
    const visited = new Set();
    const dx = {U:0, D:0, R:1, L:-1};
    const dy = {U:1, D:-1, R:0, L:0};
    for(let dir of dirs){
        const nx = x + dx[dir]; // 이동후 x좌표
        const ny = y + dy[dir]; // 이동후 y좌표
        
        if (Math.abs(nx) > 5 || Math.abs(ny) > 5) continue; // 범위 제한
        
        // 경로 기록
        const from = `${x},${y}`;
        const to = `${nx},${ny}`;
        const path = from < to ? `${from}->${to}` : `${to}->${from}`;
        visited.add(path);

        x = nx;
        y = ny;
    }
    return visited.size;
}