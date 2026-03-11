// https://leetcode.com/problems/complement-of-base-10-integer

function bitwiseComplement(n: number): number {
    // Ubah n menjadi string binary, ubah bitnya
    const complement = n.toString(2)
                        .split('')
                        .map((e) => e === '1' ? '0' : '1')
                        .join('')

    // Parsing kembali ke int dari basis 2
    return Number.parseInt(complement, 2);
};