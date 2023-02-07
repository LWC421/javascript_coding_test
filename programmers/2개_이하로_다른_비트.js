function solution(numbers) {
    const answer = [];
    
    const bits = numbers.map((num) => "0" + num.toString(2))
    
    for(let t = 0; t < numbers.length; t++){
        const bit = bits[t];
        
        if(bit.slice(bit.length-1, bit.length) === "0"){
            answer.push(numbers[t] +1)
            continue;   //1더하고 넘기기
        }
        
        for(let i = bit.length; i >= 2; i--){
            const target = bit.slice(i-2, i)
            if(target === "01"){
                const after = bit.slice(0, i-2) + "10" + bit.slice(i)
                answer.push(parseInt(after, 2))
                break
            }
        }
    }
    
    return answer;
}