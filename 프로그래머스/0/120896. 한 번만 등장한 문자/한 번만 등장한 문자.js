function solution(s) {
    const arr = [];
    const map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0) + 1)
    }
    const filtered = ([...map]).filter((str)=> str[1] == 1)
    filtered.forEach((str) => {
        arr.push(str[0])
    })
    return arr.sort().join("")
}