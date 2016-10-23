function timer() {
    let secondsSpan = $('#seconds');
    let minutesSpan = $('#minutes');
    let hoursSpan = $('#hours');
    let total = 0;
    let counter = undefined;
    $('#start-timer').click(start);
    $('#stop-timer').click(stop);
    function start() {
        if (!counter) {
            counter = setInterval(step, 1000);
        }
    }
    function stop() {
        clearInterval(counter);
        counter = undefined;
    }
    function step() {
        total++;
        let seconds = parseInt(total % 60);
        let minutes = parseInt(total / 60);
        minutes = minutes % 60;
        let hours = parseInt(total / 3600);

        seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
        minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
        hours = hours.toString().length === 1 ? '0' + hours : hours;

        secondsSpan.text(seconds);
        minutesSpan.text(minutes);
        hoursSpan.text(hours);
    }
}

