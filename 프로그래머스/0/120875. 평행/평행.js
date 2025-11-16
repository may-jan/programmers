function solution(dots) {
    const sortedX = dots.sort((a,b) => a[0]-b[0]);
    const [xA, xB, xC, xD] = sortedX;
    if((xB[1]-xA[1])/(xB[0]-xA[0]) == (xD[1]-xC[1]) / (xD[0]-xC[0])) return 1
    
    const sortedY = dots.sort((a,b) => a[1]-b[1]);
    const [yA, yB, yC, yD] = sortedY;
    if((yB[1]-yA[1])/(yB[0]-yA[0]) == (yD[1]-yC[1]) / (yD[0]-yC[0])) return 1
    
    return 0;
}