function solution(board, moves) {
    var answer = 0;
    const stack = [];
    for(move of moves){
        for(let i=0; i<board.length; i++){
            if(board[i][move-1] == 0){
                continue;
            }else{
                if(stack.at(-1) == board[i][move-1]){
                    board[i][move-1] = 0;
                    stack.pop();
                    answer += 2;
                    break;
                }else{
                    stack.push(board[i][move-1]);
                    board[i][move-1] = 0;
                    break;
                }
            }
        }
    }
    return answer;
}