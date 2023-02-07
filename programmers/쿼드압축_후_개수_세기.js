let map

function solution(arr) {
    const result = [0, 0];
    map = arr
    
    //상, 좌, 하, 우
    const queue = [[0, 0, arr.length, arr.length]] 
    let flag = true;
    let y = 0;
    let x = 0;
    
    while(queue.length){
        const [u, l, b, r] = queue.pop();
        
        const number = map[u][l];
        flag = true
        
        for(y = u; y < b; y++){
            for(x = l; x < r; x++){
                if(map[y][x] !== number){
                    flag = false;   //다른 수가 나온 경우
                }
            }
            if(!flag) break; //다른 수가 나온 경우
        }
        
        if(flag){
            result[number] += 1;
        }
        else{   //다시 분할
            queue.push([u, l, (u+b)/2, (l+r)/2]); //좌상단
            queue.push([u, (l+r)/2, (u+b)/2, r]); //우상단
            queue.push([(u+b)/2, l, b, (l+r)/2]); //좌하단
            queue.push([(u+b)/2, (l+r)/2, b, r]); //우하단
            
        }
        
    }
    
    return result;
}