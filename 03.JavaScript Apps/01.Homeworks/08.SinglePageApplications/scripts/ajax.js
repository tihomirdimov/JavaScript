function listAds() {
    $('#ads').empty();
    showView('viewAds');
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisments",
        headers: getKinveyUserAuthHeaders(),
        success: loadAdsSuccess,
        error: handleAjaxError
    });
    function loadAdsSuccess(ads) {
        showInfo('Ads loaded.');
        if (ads.length == 0) {
            $('#ads').text('No ads in the library.');
        } else {
            let adsTable = $('<table>')
                .append($('<tr>').append(
                    $('<th>').text("Title"),
                    $('<th>').text("Description"),
                    $('<th>').text("Publisher"),
                    $('<th>').text("Date Published"),
                    $('<th>').text("Price"),
                    $('<th>').text("Actions")));
            for (let ad of ads) {
                appendAdRow(ad, adsTable);
            }
            $('#ads').append(adsTable);
        }
    }
}

function appendAdRow(ad, adsTable) {
    let links = [];
    let readMoreLink = $('<a href="#">[Read More]</a>')
        .click(function () {
            readMore(ad)
        });
    links = [readMoreLink];
    if (ad._acl.creator == sessionStorage['userId']) {
        let deleteLink = $('<a href="#">[Delete]</a>')
            .click(function () {
                deleteAd(ad)
            });
        let editLink = $('<a href="#">[Edit]</a>')
            .click(function () {
                loadAdForEdit(ad)
            });
        links = [readMoreLink, ' ', deleteLink, ' ', editLink];
    }
    adsTable.append($('<tr>').append(
        $('<td>').text(ad.title),
        $('<td>').text(ad.description),
        $('<td>').text(ad.username),
        $('<td>').text(ad.date),
        $('<td>').text(ad.price),
        $('<td>').append(links)
    ));
}

function createAd() {
    let adData = {
        title: $('#formCreateAd input[name=title]').val(),
        description: $('#formCreateAd textarea[name=description]').val(),
        date: $('#formCreateAd input[name=datePublished]').val(),
        price: $('#formCreateAd input[name=price]').val(),
        username: sessionStorage['userName'],
        image: $('#formCreateAd input[name=image]').val(),
        // views: 0,
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisments",
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: createAdSuccess,
        error: handleAjaxError
    });
    function createAdSuccess(response) {
        listAds();
        showInfo('Ad created.');
    }
}

function deleteAd(ad) {
    $.ajax({
        method: "DELETE",
        url: kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/advertisments/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });
    function deleteAdSuccess(response) {
        listAds();
        showInfo('Ad deleted.');
    }
}

function loadAdForEdit(ad) {
    $.ajax({
        method: "GET",
        url: kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/advertisments/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdForEditSuccess,
        error: handleAjaxError
    });
    function loadAdForEditSuccess(ad) {
        $('#formEditAd input[name=id]').val(ad._id);
        $('#formEditAd input[name=title]').val(ad.title);
        $('#formEditAd textarea[name=description]').val(ad.description);
        $('#formEditAd input[name=datePublished]').val(ad.date);
        $('#formEditAd input[name=price]').val(ad.price);
        $('#formEditAd input[name=image]').val(ad.image);
        showView('viewEditAd');
    }
}

function editAd() {
    let adData = {
        title: $('#formEditAd input[name=title]').val(),
        description: $('#formEditAd textarea[name=description]').val(),
        date: $('#formEditAd input[name=datePublished]').val(),
        price: $('#formEditAd input[name=price]').val(),
        image: $('#formEditAd input[name=image]').val(),
        username: sessionStorage['userName']
    };
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
        "/advertisments/" + $('#formEditAd input[name=id]').val(),
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: editAdSuccess,
        error: handleAjaxError
    });

    function editAdSuccess(response) {
        listAds();
        showInfo('Ad edited.');
    }
}

function readMore(ad) {
    $('#viewDetailsAd').empty();
    $('#viewDetailsAd').append($('<div>').append(
        $('<img>').attr('src',ad.image),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Price:'),
        $('<h1>').text(ad.price),
        $('<label>').text('Description:'),
        $('<p>').text(ad.description),
        $('<label>').text('Publisher:'),
        $('<p>').text(ad.username),
        $('<label>').text('Date:'),
        $('<div>').text(ad.date)
    ));
    showView('viewDetailsAd');
    // let counter = Number.parseInt(ad.views) + 1;
    // let adData = {
    //     title: ad.title,
    //     description: ad.description,
    //     date: ad.date,
    //     price: ad.price,
    //     username: ad.username,
    //     views: counter
    // };
    // $.ajax({
    //     method: "PUT",
    //     url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
    //     "/advertisments/" + ad._id,
    //     headers: getKinveyUserAuthHeaders(),
    //     data: adData,
    //     error: handleAjaxError
    // });
}