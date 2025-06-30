function solution(phone_book) {
    var answer = true;
    const numbers = new Map();
    phone_book.forEach((phone)=>{
        numbers.set(phone, true);
    });
    for(let phone of phone_book){
        for(let i=0; i<phone.length; i++){
            if(numbers.has(phone.slice(0,i))) return false;
        }
    }
    return answer;
}