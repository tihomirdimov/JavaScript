function showHideMenuLinks() {
    if (sessionStorage.getItem('authToken')) {
        // logged
        $("#linkMenuAppHome").hide();
        $("#linkMenuLogin").hide();
        $("#linkMenuRegister").hide();
        $("#linkMenuUserHome").show();
        $("#linkMenuShop").show();
        $("#linkMenuCart").show();
        $("#linkMenuLogout").show();
        $("#spanMenuLoggedInUser").show();
    } else {
        //not logged
        $("#linkMenuAppHome").show();
        $("#linkMenuLogin").show();
        $("#linkMenuRegister").show();
        $("#linkMenuUserHome").hide();
        $("#linkMenuShop").hide();
        $("#linkMenuCart").hide();
        $("#linkMenuLogout").show();
        $("#linkMenuLogout").hide();
        $("#spanMenuLoggedInUser").hide();
    }
}

function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showAppHomeView() {
    showView('viewAppHome');
}

function showUserHomeView() {
    showView('viewUserHome');
    $('#spanMenuLoggedInUser').text("Welcome, " + sessionStorage.getItem("userName"));
    $('#viewUserHomeHeading').text("Welcome, " + sessionStorage.getItem("userName"));
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');
}
