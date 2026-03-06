// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones

function checkOnesSegment(s: string): boolean {

    // Kalo pertama 0 langsung return false
    if (s[0] === '0') 
        return false;

    let i = 1;

    // Lewatin continous 1
    while (s[i] === '1')
        i++;

    // Lewation contionus 0 sisanya
    while (s[i] === '0')
        i++;

    return i === s.length;
};