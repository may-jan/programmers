function solution(keyinput, board) {
  const answer = [0, 0];
  const halfX = Math.floor(board[0]/2);
  const halfY = Math.floor(board[1]/2);

  const keys = {
    up : [0, 1],
    down :[0, -1],
    left : [-1, 0],
    right : [1, 0]
  };

  for(const k of keyinput) {
    const [dx, dy] = keys[k]
    
    if (Math.abs(answer[0] + dx) <= halfX) {
      answer[0] += dx;
    }

    if (Math.abs(answer[1] + dy) <= halfY) {
      answer[1] += dy;
    }
  }

  return answer;
}
