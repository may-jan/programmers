function solution(myStr) {
    const arr = ["a", "b", "c"];
    let str = myStr;
    arr.forEach((s)=>{
        str = str.replaceAll(s, "-");
    })
    const splitArr = str.split("-");
    const res = splitArr.filter((s) => s!=="");
    return res.length ? res : ['EMPTY']
}