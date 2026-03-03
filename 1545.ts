// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string

function findKthBit(n: number, k: number): string {
    let s: string = '0';
3
    while (n != 1) {

        if (s.length >= k) {
            return s[k-1]!;
        }

        s = s + '1' + invertStringBit(s.split('').reverse().join(''));
        n--;
    }

    return s!;
};

function invertStringBit(str: string): string {
    return str.split('').map(c => c === '1' ? '0' : '1').join('');
}