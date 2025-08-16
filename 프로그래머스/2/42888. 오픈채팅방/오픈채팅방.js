function solution(record) {
    var answer = [];
    const userMap = new Map();
    const splitedRecord = record.map(r => r.split(" "));
    splitedRecord.forEach(r => {
        if(r[0] == 'Enter' || r[0] == "Change") userMap.set(r[1], r[2]);
    });
    splitedRecord.forEach(r => {
        if(r[0] == 'Enter'){
            answer.push(`${userMap.get(r[1])}님이 들어왔습니다.`);
        }
        if(r[0] == "Leave"){
            answer.push(`${userMap.get(r[1])}님이 나갔습니다.`);
        }
    })
    return answer;
}