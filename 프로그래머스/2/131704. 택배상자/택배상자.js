function solution(order) {
    const truck = [];
    const rail = [];
    let mainRail_idx = 1;
    
    for(let i=0; i<order.length; i++){
        while(mainRail_idx < order[i]){
            rail.push(mainRail_idx++);
        }
        if(mainRail_idx == order[i]){ 
            truck.push(order[i]);
            mainRail_idx++;
        }else{
            if(rail.length > 0 && rail.at(-1) === order[i]){
                truck.push(rail.pop());
            } else {
                break;
            }
        }
    }
    return truck.length;
}