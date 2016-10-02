function dnaHelix (input) {
    let n = Number(input[0]);
    let dna = 'ATCGTTAGGG';
    let index = 0;
    for (let row = 0; row < n; row++) {
        if (row % 4 === 0) {
            console.log(`**${dna[index++ % dna.length]}${dna[index++ % dna.length]}**`);
        } else if (row % 4 === 1) {
            console.log(`*${dna[index++ % dna.length]}--${dna[index++ % dna.length]}*`);
        } else if (row % 4 === 2) {
            console.log(`${dna[index++ % dna.length]}----${dna[index++ % dna.length]}`);
        } else if (row % 4 === 3) {
            console.log(`*${dna[index++ % dna.length]}--${dna[index++ % dna.length]}*`);
        }
    }
}
