const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HynrpOqXg";
const kinveyAppSecret = "9a1c724d4e6547469670bbef7d90e004";
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " +
    btoa(kinveyAppKey + ":" + kinveyAppSecret),
};

function registerUser() {
    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=password]').val(),
        name: $('#formRegister input[name=name]').val()
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
        showUserHomeView();
        showHideMenuLinks();
        showInfo('User registration successful.');
    }
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
        showUserHomeView();
        showHideMenuLinks();
        showInfo('Login successful.');
    }
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text("");
    showHideMenuLinks();
    showView('viewAppHome');
    showInfo('Logout successful.');
}


function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let userName = userInfo.username;
    sessionStorage.setItem('userName', userName);
    let name = userInfo.name;
    sessionStorage.setItem('name', name);
}

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " +
        sessionStorage.getItem('authToken'),
    };
}