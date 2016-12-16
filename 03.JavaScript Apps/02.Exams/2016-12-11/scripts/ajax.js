function viewMyMessages() {
    $('#myMessages').empty();
    showView('viewMyMessages');
    let recipient = sessionStorage.getItem('userName');
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + '/messages?query={"recipient_username":"' + recipient + '"}',
        headers: getKinveyUserAuthHeaders(),
        success: loadMessagesSuccess,
        error: handleAjaxError
    });
    function loadMessagesSuccess(msgs) {
        showInfo('Messages loaded');
        if (msgs.length == 0) {
            $('#myMessages').text('No messsages');
        } else {
            let msgTable = $('<table>')
                .append($('<tr>').append(
                    $('<th>').text("From"),
                    $('<th>').text("Message"),
                    $('<th>').text("Date Received")));
            for (let msg of msgs) {
                appendMsgRow(msg, msgTable);
            }
            $('#myMessages').append(msgTable);
        }
    }
}
function appendMsgRow(msg, msgsTable) {
    msgsTable.append($('<tr>').append(
        $('<td>').text(formatSender(msg.sender_name, msg.sender_username)),
        $('<td>').text(msg.text),
        $('<td>').text(formatDate(msg._kmd.lmt))
    ));
}

function viewSentMessages() {
    $('#sentMessages').empty();
    showView('viewArchiveSent');
    let sender = sessionStorage.getItem('userName');
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + '/messages?query={"sender_username":"' + sender + '"}',
        headers: getKinveyUserAuthHeaders(),
        success: loadMessagesSuccess,
        error: handleAjaxError
    });
    function loadMessagesSuccess(msgs) {
        showInfo('Messages loaded');
        if (msgs.length == 0) {
            $('#sentMessages').text('No messsages');
        } else {
            let msgTable = $('<table>')
                .append($('<tr>').append(
                    $('<th>').text("To"),
                    $('<th>').text("Message"),
                    $('<th>').text("Date Sent"),
                    $('<th>').text("Actions")));
            for (let msg of msgs) {
                appendSentMsgRow(msg, msgTable);
            }
            $('#sentMessages').append(msgTable);
        }
    }
}

function appendSentMsgRow(msg, msgsTable) {
    msgsTable.append($('<tr>').append(
        $('<td>').text(msg.recipient_username),
        $('<td>').text(msg.text),
        $('<td>').text(formatDate(msg._kmd.lmt)),
        $('<td>').append($('<button>').text('delete').click(function () {
            deleteMsg(msg)
        }))));
}

function deleteMsg(msg) {
    $.ajax({
        method: "DELETE",
        url: kinveyMsgUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/messages/" + msg._id,
        headers: getKinveyUserAuthHeaders(),
        success: deleteMsgSuccess,
        error: handleAjaxError
    });
    function deleteMsgSuccess(response) {
        viewSentMessages();
        showInfo('Message deleted.');
    }
}

function sendNewMessage() {
    showSendMessageView();
    let users = $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey,
        headers: getKinveyUserAuthHeaders(),
        success: loadUsersSuccess,
        error: handleAjaxError
    });

    function loadUsersSuccess(users) {
        $('#msgRecipientUsername').empty();
        for (let user of users) {
            $('#msgRecipientUsername')
                .append($('<option>')
                    .attr("value", user.username)
                    .html(user.name + " (" + user.username + ")"));
        }
    }
}

function sendMessage() {
    let sender = sessionStorage.getItem('name');
    if (sender == "") {
        let sender = null;
    } else {
        let sender = sessionStorage.getItem('name')
    }
    let messageData = {
            sender_username: sessionStorage.getItem('userName'),
            sender_name: sender,
            recipient_username: $('#msgRecipientUsername option:selected', this).attr('value'),
            text: $('#formSendMessage input[name=text]').val(),
        }
        ;
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
        headers: getKinveyUserAuthHeaders(),
        data: messageData,
        success: createAdSuccess,
        error: handleAjaxError
    });
    function createAdSuccess(response) {
        viewSentMessages();
        showInfo('Message sent.');
    }
}