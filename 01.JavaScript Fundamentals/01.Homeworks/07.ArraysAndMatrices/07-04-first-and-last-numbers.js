function firsAndtLastElements(input) {
    let k = Number(input.shift());
    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(input.length - k, input.length).join(' '));
}

