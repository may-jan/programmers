function solution(fees, records) {
    const [basicMin, basicFee, unitMin, unitFee] = fees;

    var answer = [];
    const map = new Map();
    const minutesMap = new Map();
    
    records.forEach((record) =>{
        const [time, number, type] = record.split(" ");
        if(type == "IN"){
            map.set(number, time);
        }else{
            const minutes = calculateTime(map.get(number), time);
            minutesMap.set(number, (minutesMap.get(number) || 0) + minutes);
            map.delete(number);
        }
    });
    
    // 출차기록이 없는 차량
    const onlyIn = [...map];
    onlyIn.forEach(([number, time])=>{
        const minutes = calculateTime(time,'23:59');
        minutesMap.set(number, (minutesMap.get(number) || 0) + minutes);
    });    
    
    // 요금계산
    const minutesArr = [...minutesMap];
    minutesArr.sort((a,b) => a[0] - b[0])
    minutesArr.forEach(([number, minutes]) => {
        if(minutes <= basicMin) answer.push(basicFee);
        if(minutes > basicMin){
            answer.push(basicFee + Math.ceil((minutes - basicMin)/unitMin) * unitFee);
        }  
    })
    return answer;
}

function calculateTime(inTime, outTime){
    const inArr = inTime.split(":");
    const outArr = outTime.split(":");
    const inMinutes = Number(inArr[0]) * 60 + Number(inArr[1]);
    const outMinutes = Number(outArr[0]) * 60 + Number(outArr[1]);
    return outMinutes - inMinutes;
}