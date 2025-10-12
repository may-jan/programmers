function solution(book_time) {
  function toMinutes(timeStr){
    const [hh, mm] = timeStr.split(':').map(Number);
    return hh * 60 + mm;
  }

  // book_time을 [시작(분), 종료(분)] 형태로 바꾸고 정렬
  const times = book_time.map(([start, end]) => {
    return [toMinutes(start), toMinutes(end)];
  });
    
  times.sort((a, b) => a[0]-b[0]);

  const rooms = [];

  for(const [s, e] of times){
    let placed = false;

    // 가능한 방 있는지 탐색
    for(let i=0; i<rooms.length; i++){
      // 재활용 가능한 방이 있는 경우
      if(rooms[i]+10 <= s){ 
        rooms[i] = e;  // 이 방의 최신 종료 시간을 갱신
        placed = true;
        break;
      }
    }

    if(!placed){
      // 재활용 가능한 방이 없으면 새 방 추가
      rooms.push(e);
    }
  }

  return rooms.length;
}
