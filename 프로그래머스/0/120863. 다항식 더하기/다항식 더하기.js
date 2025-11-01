function solution(polynomial) {
    let x = 0, num = 0;
    
    polynomial.split(" + ").forEach((term) => {
        if(term.includes("x")){
            x += term === "x" ? 1 : Number(term.replace("x", ""));
        }else{
            num += Number(term);
        }
    })
    
    if(x && num) return `${x == 1 ? "" : x}x + ${num}`;
    if(x) return `${x == 1 ? "" : x}x`;
    return `${num}`;
}