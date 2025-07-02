function solution(id_list, report, k) {
    var answer = [];
    const reports = new Map(); // 신고한사람, 신고된사람 목록
    const reportCount = new Map(); // 신고당한 횟수
    const result = new Map(); // 받은 메일 수
    
    // 초기 셋팅
    id_list.forEach((id)=>{
        reports.set(id, new Set());
        reportCount.set(id, 0);
        result.set(id, 0);
    });
    
    // 신고 처리 (중복 제거)
    report.forEach((r)=>{
        const [from, to] = r.split(" ");
        const set = reports.get(from); // from:신고한사람
        if(!set.has(to)){ // from이 to를 신고한적 없다면
            set.add(to); // to를 from의 신고된사람 목록에 추가
            reportCount.set(to, reportCount.get(to) + 1); // to가 신고당한 횟수 추가
        }
    })
    
    // 정지된 유저 찾기
    const stopped = new Set(); // 정지된 유저 목록
    reportCount.forEach((count, user)=>{
        if(count >= k) stopped.add(user);
    });
   
    // 메일 발송 -> result에 셋팅
    reports.forEach((set, user)=>{
        set.forEach((reported)=>{ // user가 신고한사람 목록
            if(stopped.has(reported)){ // 정지된 유저이면
                result.set(user, result.get(user)+1);
            }
        })
    })
   
    return id_list.map(id => result.get(id));
}