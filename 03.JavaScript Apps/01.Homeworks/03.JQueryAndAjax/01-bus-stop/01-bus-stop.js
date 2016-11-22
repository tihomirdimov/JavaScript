function getInfo() {
    let stopId = $('#stopId').val();
    $.ajax({
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        method: 'GET',
        success: displayStop,
        error: displayError
    });
    function displayStop(data) {
        $('#buses').empty();
        $('#stopName').text(data.name);
        for (let index in data.buses) {
            let li = $(`<li>Bus ${index} arrives in ${data.buses[index]} minutes</li>`);
            $('#buses').append(li);
        }
    }
    function displayError(err) {
        $('#stopName').text('Error');
        $('#buses').empty();
    }
}
