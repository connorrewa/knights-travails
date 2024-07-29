export default function knightMoves(start, end) {
    
}

function dfs(start, end) {
    let [endX, endY] = end;
    let [startX, startY] = start;
    console.log(startX, startY);
    let visited = [];
    for (let i = 0; i < 8; i++) {
        let newRow = []
        for (let j = 0; j < 8; j++) {
            
            newRow.push(0);
        }
        visited.push(newRow);
    }
    visited[startX][startY] = 'v';
    visited[endX][endY] = '2';
    console.log(visited)
    if (start[0] === end[0] && start[1] == end[1]) {
        return true;
    }
    
}

console.log(dfs([1,2], [1,4]));