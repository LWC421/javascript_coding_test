function solution(expression) {
    let answer = 0;
    
    const arr = expression.split(/(\+|\-|\*)/) //연산자로 자르기
    
    for(let i = 0; i < arr.length; i+=2){
        arr[i] = parseInt(arr[i])
    }
    
    const opers = [["*", "+", "-"], ["*", "-", "+"], 
                  ["+", "*", "-"], ["+", "-", "*"],
                  ["-", "*", "+"], ["-", "+", "*"]]
                   
    opers.forEach((oper) => {
        const tmp = arr.map((i) => i);
        const result = solve(tmp, oper)
        
        answer = Math.max(Math.abs(result), answer)
    })
    
    
    return answer;
}

//arr : 연산자를 기준으로 자른 배열
//opers : 우선순위를 설정한 연산자 배열
const solve = (arr, opers) => {
    let index = -1;
    let result = 0;
    opers.forEach((oper) => {
        while((index = arr.findIndex((a) => a===oper)) !== -1){  //해당 연산자가 존재하면 반복하기            
            if(oper === "*"){
                result = arr[index-1] * arr[index+1]
            }
            else if(oper === "+"){
                result = arr[index-1] + arr[index+1]
            }
            else if(oper === "-"){
                result = arr[index-1] - arr[index+1]
            }
            
            arr.splice(index-1, 3, result)
        }
    })
    
    return arr[0]
}