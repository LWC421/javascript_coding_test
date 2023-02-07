const solution = (maps) => {
    let answer = 100*100+1

    
    const yLength = maps.length
    const xLength = maps[0].length
    
    const visited = Array(yLength).fill(undefined)
    for(let y = 0; y < yLength; y++){
        visited[y] = Array(xLength).fill(false)
    }
    
    const queue = [[0, 0, 1]];
    while(queue.length){
        const [y, x, count] = queue.shift();
        if(y === yLength-1 && x === xLength-1){
            answer = count;
            break;
        }
        if(y > 0 && visited[y-1][x] === false && maps[y-1][x] === 1){
            queue.push([y-1, x, count+1])
            visited[y-1][x] = true;
        }
        if(y+1 < yLength && visited[y+1][x] === false && maps[y+1][x] === 1){
            queue.push([y+1, x, count+1])
            visited[y+1][x] = true;
        }
        if(x > 0 && visited[y][x-1] === false && maps[y][x-1] === 1){
            queue.push([y, x-1, count+1])
            visited[y][x-1] = true;
        }
        if(x+1 < xLength && visited[y][x+1] === false && maps[y][x+1] === 1){
            queue.push([y, x+1, count+1])
            visited[y][x+1] = true;
        }
    }
    
    if(answer === 100*100+1){
        return -1;
    }
    
    return answer;
}