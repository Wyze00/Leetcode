// https://leetcode.com/problems/special-positions-in-a-binary-matrix

function numSpecial(mat: number[][]): number {
    let count = 0;

    // Loop matrix
    for (let i = 0 ; i<mat.length ; i++) {
        
        for (let j = 0 ; j<mat[i]!.length ; j++) {

            const currentValue: number | undefined = mat[i]![j];
     
            if (currentValue === 1) {

                let dup = false;

                // Cek kalo ada 2 angka 1 pada row
                for (let k = 0, n = 2 ; k<mat[i]!.length ; k++) {
                    if (mat[i]![k] == 1) 
                        n--;
                    if (n == 0) {
                        dup = true;
                        break;
                    }
                }
                
                // Kalo ada lanjut
                if (dup)
                    continue;

                // Cek kalo ada 2 angka 1 pada col
                for (let k = 0, n = 2 ; k<mat.length ; k++) {
                    if (mat[k]![j] == 1) 
                        n--;
                    if (n == 0) {
                        dup = true;
                        break;
                    }
                }

                // Kalo gk ada increment count
                if (!dup)
                    count++;
            } 
        } 
    } 

    return count;
};