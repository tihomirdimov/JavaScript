function cookingBynbers(input) {
    let n = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        n = performOperation(input[i], n);
    }
    function performOperation(type, n) {
        switch (type) {
            case "chop":
                n = n / 2;
                console.log(n);
                return n;
            case "dice":
                n = Math.sqrt(n);
                console.log(n);
                return n;
            case "spice":
                n += 1;
                console.log(n);
                return n;
            case "bake":
                n *= 3;
                console.log(n);
                return n;
            case "fillet":
                n = n - (n * 0.2);
                console.log(n);
                return n;
        }
    }
}