function solution(id_list, report, k) {
    var answer = [];
    const check = new Map();
    const reportCount = new Map();
    const stopped = [];
    
    id_list.forEach((user)=>{
        check.set(user, {
            reportedId : [],
            stoppedId : []
        })
        reportCount.set(user, 0);
    });
    report.forEach((r)=>{
        const [user, reported] = r.split(" ");
        const prevReportedId = check.get(user).reportedId;
        if(prevReportedId.includes(reported)){
            return;
        };
        check.set(user, {
            reportedId : prevReportedId ? [...prevReportedId, reported] : [reported],
            stoppedId : []
        });
        reportCount.set(reported, reportCount.get(reported)+1);
        if(reportCount.get(reported) >= k){
            stopped.push(reported);
        }
    })
    check.forEach((user)=>{
        const prevReportedId = user.reportedId;
        const prevStoppedId = user.stoppedId;
        prevReportedId?.forEach((id)=>{
            if(stopped.includes(id)){
                prevStoppedId.push(id);
            }
        });
    });
    check.forEach((user)=>{
        answer.push(user.stoppedId.length);
    })
    return answer;
}