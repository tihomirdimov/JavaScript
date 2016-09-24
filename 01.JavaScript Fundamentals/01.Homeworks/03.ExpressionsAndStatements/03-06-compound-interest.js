function compoundInterest([p,i,n,t]) {
    let f = p * (Math.pow((1 + (i / 100) / (12 / n)), ((12 / n) * t)));
    console.log(f.toFixed(2));
}
