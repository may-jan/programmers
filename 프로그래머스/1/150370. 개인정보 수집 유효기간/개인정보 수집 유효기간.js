function solution(today, terms, privacies) {
  const answer = [];

  const termMap = {};
  for(const t of terms){
    const [type, mStr] = t.split(" ");
    termMap[type] = Number(mStr);
  }

  function toDays(dateStr) {
    const [y, m, d] = dateStr.split(".").map(Number);
    return y * 12 * 28 + m * 28 + d;
  }

  const todayDays = toDays(today);

  privacies.forEach((p, idx) => {
    const [dateStr, type] = p.split(" ");
    const startDays = toDays(dateStr);
    const months = termMap[type];
    const expireDays = startDays + months * 28;

    if(expireDays <= todayDays){
      answer.push(idx+1);
    }
  });

  return answer;
}
