function spices(input) {
    let source = Number(input[0]);
    let yield = 0;
    let days = 0;
    while (source >= 100) {
        yield += source;
        source -= 10;
        days++;
        if (yield >= 26) {
            yield -= 26;
        }
    }
    if (yield >= 26) {
        yield -= 26;
    }
    console.log(days);
    console.log(yield);
}

spices([111]);