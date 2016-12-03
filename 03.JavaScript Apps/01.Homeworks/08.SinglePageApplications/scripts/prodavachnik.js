function prodavachnikApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_H1oc-Wqfe";
    const kinveyAppSecret = "a8148e8cd8d3446f9dc69154a4d0cc9e";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };
    sessionStorage.clear(); // Clear user auth data
    showHideMenuLinks();
    showView('viewHome');
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });
    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        } else {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=password]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let userName = userInfo.username;
        sessionStorage.setItem('userName', userName);
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=password]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

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
                    .append($('<tr>')
                        .append($('<th>').text("Title"))
                        .append($('<th>').text("Description"))
                        .append($('<th>').text("Publisher"))
                        .append($('<th>').text("Date Published"))
                        .append($('<th>').text("Price"))
                        .append($('<th>').text("Actions")));
                for (let ad of ads) {
                    appendAdRow(ad, adsTable);
                }
                $('#ads').append(adsTable);
            }
        }
    }

    function appendAdRow(ad, adsTable) {
        let links = [];
        if (ad._acl.creator == sessionStorage['userId']) {
            let deleteLink = $('<a href="#">[Delete]</a>')
                .click(function () {
                    deleteAd(ad)
                });
            let editLink = $('<a href="#">[Edit]</a>')
                .click(function () {
                    loadAdForEdit(ad)
                });
            links = [deleteLink, ' ', editLink];
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
            username: sessionStorage['userName']
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
            showView('viewEditAd');
        }
    }

    function editAd() {
        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            date: $('#formEditAd input[name=datePublished]').val(),
            price: $('#formEditAd input[name=price]').val(),
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

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " +
            sessionStorage.getItem('authToken'),
        };
    }
}
