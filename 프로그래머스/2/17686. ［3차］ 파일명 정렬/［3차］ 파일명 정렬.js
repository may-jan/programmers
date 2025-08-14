function solution(files) {    
    const headReg = /^[^0-9]+/;
    const numberReg = /\d+/;
    
    const parsed = files.map((f) => {
        const HEAD = f.match(headReg)[0];
        const NUMBER = f.match(numberReg)[0];
        const TAIL = f.slice(HEAD.length + NUMBER.length);
        return [HEAD, NUMBER, TAIL];
    })
    
    parsed.sort((a,b) => {
        return a[0].toLowerCase() == b[0].toLowerCase()
            ? Number(a[1]) - Number(b[1])
            : a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    return parsed.map(p => p.join(""));
}