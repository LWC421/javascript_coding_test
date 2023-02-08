function solution(queue1, queue2) {
    let q1Sum = queue1.reduce((prev, cur) => prev+cur, 0)
    let q2Sum = queue2.reduce((prev, cur) => prev+cur, 0)
    
    const maxLength = queue1.length * 4;
    
    let q1Cur = 0;
    let q2Cur = 0;  //현재 커서의 위치

    let i = 0;  //현재 작업 횟수
    for(; i < maxLength; i++){
        if(q1Sum === q2Sum){    //둘의 결과가 같아지면 종료
            break;
        }
        if(q1Sum < q2Sum){  //q1이 작을 경우, queue2에 있는거 빼서 넣기
            queue1.push(queue2[q2Cur])
            q1Sum += queue2[q2Cur]
            q2Sum -= queue2[q2Cur++]
        }
        else{   //q2가 작은 경우, queue1에 있는거 빼서 넣기
            queue2.push(queue1[q1Cur])
            q2Sum += queue1[q1Cur]
            q1Sum -= queue1[q1Cur++]
        }
    }
    
    return i === maxLength ? -1 : i;
}