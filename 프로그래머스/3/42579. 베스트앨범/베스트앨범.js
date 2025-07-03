function solution(genres, plays) {
    var answer = [];
    const genreMap = new Map(); // 장르별 총 재생수
    const songMap = new Map(); // 장르별 곡 정보 리스트
    
    // 초기 셋팅
    genres.forEach((g, idx) => {
        genreMap.set(g, genreMap.get(g) ? genreMap.get(g) + plays[idx] : plays[idx]);
        songMap.set(g, []);
    })
    
    // 장르별 곡 정보 (인덱스, 재생횟수)
    genres.forEach((g, i) => {
        const play = plays[i];
        const prev = songMap.get(g);
        prev.push({play, i});
    });
    
    // genreMap에서 재생수 내림차순 정렬
    const sortedGenreMap = [...genreMap.entries()].sort((a,b)=>b[1]-a[1]);
    // 장르별 재생수 내림차순 정렬 + 같은 재생수는 인덱스 오름차순 정렬
    sortedGenreMap.forEach((g) => {
        const genre = g[0];
        const songs = songMap.get(genre);
        songs.sort((a, b)=> {
            if(a.play == b.play){
                return a.idx - b.idx;
            }
            return b.play - a.play;
        });
        answer.push(songs[0].i);
        if (songs[1]) answer.push(songs[1].i);
    })
    return answer;
}