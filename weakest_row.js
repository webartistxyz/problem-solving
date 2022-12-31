let kWeakestRows = function(mat, k) {
    let y = mat.length, x = mat[0].length,
        vis = new Uint8Array(y), ans = []


    for (let j = 0; j <= x; j++)
        for (let i = 0; i < y; i++) {
            if (!vis[i] && !mat[i][j]){
                ans.push(i);
                // console.log(i)
                vis[i]++
            }
            if (ans.length === k) return ans
        }
};


let mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]];
let k = 3;

console.log(kWeakestRows(mat, k));