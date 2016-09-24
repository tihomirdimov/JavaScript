function rounding([num, precision]) {
    if (precision>15)
    {
        precision = 15;
    }
    console.log(parseFloat(Number(num).toFixed(Number(precision))));
}