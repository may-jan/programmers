function solution(keymap, targets) {
    var answer = [];
    targets.forEach((str,idx)=>{
        let num = 0;
        for(let i=0; i<str.length; i++){
            const cnt = findIndex(keymap, str[i]);
            const filtering = cnt.filter((c) => c !== -1);
            if (filtering.length === 0) {
                num = -1;
                break;
            } else {
                num += Math.min(...filtering) + 1;
            }
        }
        answer.push(num);
    });
    return answer;
}

function findIndex(keymap, str){
    let clickArr = [];
        keymap.forEach((k)=>{
            const idx = k.indexOf(str);
            clickArr.push(idx);
        })
    return clickArr;
    }