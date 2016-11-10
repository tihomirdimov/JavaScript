function * lookAndSay(start) {
    let next = start + '';
    while (true) {
        next = next.replace(/(.)\1*/g, function(seq, p1){ return seq.length.toString() + p1 });
        yield next;
    }
}