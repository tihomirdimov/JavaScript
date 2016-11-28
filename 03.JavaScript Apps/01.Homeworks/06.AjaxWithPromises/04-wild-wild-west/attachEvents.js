//work in progress
function attachEvents() {
    let url = `https://baas.kinvey.com/appdata/kid_By_NcflGe/players`;
    let username = 'guest';
    let password = 'guest';
    let baseauth = btoa(`${username}:${password}`);
    let authHeaders = {'Authorization': `Basic ${baseauth}`, 'Content-Type': 'application/json'};

    $('#save').click(savePlayerProgress);
    $('#addPlayer').click(addPlayer);
    loadPlayers();

    function loadPlayers() {
        let getPlayersRequest = {
            method: 'GET',
            url: `${url}`,
            headers: authHeaders
        };

        $.ajax(getPlayersRequest)
            .then(displayPlayers)
            .catch(displayError);
    }

    function displayPlayers(players) {
        $('#players').empty();
        for (let player of players) {
            $('#players')
                .append($('<div/>')
                    .addClass('player')
                    .attr('data-id', player._id)
                    .append($('<div/>')
                        .addClass('row')
                        .append($('<label/>')
                            .text('Name'))
                        .append($('<label/>')
                            .addClass('name')
                            .text(player.name)))
                    .append($('<div/>')
                        .addClass('row')
                        .append($('<label/>')
                            .text('Money'))
                        .append($('<label/>')
                            .addClass('money')
                            .text(player.money)))
                    .append($('<div/>')
                        .addClass('row')
                        .append($('<label/>')
                            .text('Bullets'))
                        .append($('<label/>')
                            .addClass('bullets')
                            .text(player.bullets)))
                    .append($('<button/>').addClass('play').text('Play'))
                    .append($('<button/>').addClass('delete').attr('data-id', player._id).text('Delete')))
        }
        $('.play').click(playGame);
        $('.delete').click(deletePlayer);
    }

    function addPlayer(event) {
        let newPlayer = {
            name: $('#addName').val(),
            money: 500,
            bullets: 6
        };
        $('#addName').val('');

        let addNewPlayerRequest = {
            method: 'POST',
            url: `${url}`,
            headers: authHeaders,
            data: JSON.stringify(newPlayer)
        };

        $.ajax(addNewPlayerRequest)
            .then(loadPlayers)
            .catch(displayError);
    }

    function deletePlayer(event) {
        let playerId = $(event.currentTarget).attr('data-id');
        let deletePlayerRequest = {
            method: 'DELETE',
            url: `${url}/${playerId}`,
            headers: authHeaders
        };

        $.ajax(deletePlayerRequest)
            .then(loadPlayers)
            .catch(displayError);
    }

    function playGame(event) {
        let playerId = $(event.currentTarget).parent().attr('data-id');
        let getPlayerData = {
            method: 'GET',
            url: `${url}/${playerId}`,
            headers: authHeaders
        };
        $.ajax(getPlayerData)
            .then(loadCanvas)
            .catch(displayError);
        $('#save').css('display','inline');
        $('#reload').css('display','inline');
        $('#canvas').css('display','inline');
    }

    function savePlayerProgress(event) {

    }

    function displayError(error) {

    }
}

