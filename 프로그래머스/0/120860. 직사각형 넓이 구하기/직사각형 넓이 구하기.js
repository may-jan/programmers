function solution(dots) {
  // x 좌표의 최소•최대 구하기
  let xs = dots.map(pt => pt[0]);
  let ys = dots.map(pt => pt[1]);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const width = maxX - minX;
  const height = maxY - minY;

  return width * height;
}
