// https://leetcode.com/problems/find-unique-binary-string

function findDifferentBinaryString(nums: string[]): string {
    // Bikin set dari input nums
    const binarySet = new Set<string>(nums);
    let found = false;
    let res = '';

    function dfs(str: string = '') {

        if (found) 
            return; 

        if (str.length === nums.length) {

            if (binarySet.has(str) === false) {
                res = str;
                found = true;
            }
            
            return;
        }
        dfs(str + '0');
        dfs(str + '1');
    }

    dfs();
    return res;
};

