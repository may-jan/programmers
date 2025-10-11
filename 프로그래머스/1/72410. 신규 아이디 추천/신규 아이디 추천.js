function solution(new_id) {
  // 1. 대문자 → 소문자
  let id = new_id.toLowerCase();

  // 2. 허용 문자만 남기기
  id = id.replace(/[^a-z0-9-_.]/g, '');

  // 3. 연속된 점(.) 하나로 치환
  id = id.replace(/\.{2,}/g, '.');

  // 4. 시작 또는 끝의 점 제거
  id = id.replace(/^\.|\.$/g, '');

  // 5. 빈 문자열이면 "a"
  if (id === '') {
    id = 'a';
  }

  // 6. 길이 제한 (최대 15)
  if (id.length >= 16) {
    id = id.slice(0, 15);
    id = id.replace(/\.$/, ''); // 끝의 점 제거
  }

  // 7. 길이 2자 이하이면 마지막 문자 반복해서 3자로 만들기
  while (id.length < 3) {
    id += id[id.length - 1];
  }

  return id;
}
