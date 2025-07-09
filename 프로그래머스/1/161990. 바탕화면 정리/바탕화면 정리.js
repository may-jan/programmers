function solution(wallpaper) {
    let positions = [];
    wallpaper.forEach((position, idx) =>{
        for(let i=0; i<position.length; i++){
            if(position[i] == "#") positions.push([idx, i]);
        }
    });
    const start = [];
    const end = [];
    const result = [];
    positions.forEach(([a,b]) => {
        if(result[0] == undefined) result[0] = a;
        if(result[0] > a) result[0] = a ;
        if(result[1] == undefined) result[1] = b;
        if(result[1] > b) result[1] = b ;
        if(result[2] == undefined) result[2] = a+1;
        if(result[2]-1 < a) result[2] = a+1;
        if(result[3] == undefined) result[3] = b+1;
        if(result[3]-1 < b) result[3] = b+1;        
    });
   
    return result;
}