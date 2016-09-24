function distanceOverTime([v1, v2, t]){
    let s1 = (v1*1000/3600)*t;
    let s2 = (v2*1000/3600)*t;
    let delta = Math.abs(s1-s2);
    console.log(delta);
}
