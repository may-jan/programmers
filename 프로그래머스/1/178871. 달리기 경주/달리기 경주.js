function solution(players, callings) {
    const ranking = new Map();
    players.forEach((name, index) => {
      ranking.set(name, index);
    });
    callings.forEach((name)=>{
        const curIdx = ranking.get(name);
        const frontIdx = curIdx-1;
        const frontName = players[frontIdx];
        [players[curIdx], players[curIdx-1]] = [players[curIdx-1], players[curIdx]]
        ranking.set(name, frontIdx);
        ranking.set(frontName, curIdx);
    })
    return players;
}