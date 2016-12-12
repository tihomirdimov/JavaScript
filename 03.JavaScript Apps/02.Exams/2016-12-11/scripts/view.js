function showHideMenuLinks() {
    if (sessionStorage.getItem('authToken')) {
        // logged
        $("#linkMenuAppHome").hide();
        $("#linkMenuLogin").hide();
        $("#linkMenuRegister").hide();
        $("#linkMenuUserHome").show();
        $("#linkMenuMyMessages").show();
        $("#linkMenuArchiveSent").show();
        $("#linkMenuSendMessage").show();
        $("#linkMenuLogout").show();
        $("#spanMenuLoggedInUser").show();
    } else {
        //not logged
        $("#linkMenuAppHome").show();
        $("#linkMenuLogin").show();
        $("#linkMenuRegister").show();
        $("#linkMenuUserHome").hide();
        $("#linkMenuMyMessages").hide();
        $("#linkMenuArchiveSent").hide();
        $("#linkMenuSendMessage").hide();
        $("#linkMenuLogout").hide();
        $("#spanMenuLoggedInUser").hide();
    }
}

function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showAppHomeView(){
    showView('viewAppHome');
}

function showUserHomeView(){
    showView('viewUserHome');
    $('#spanMenuLoggedInUser').html("Welcome, "+sessionStorage.getItem('name'));
    $('#viewUserHomeHeading').html("Welcome, "+sessionStorage.getItem('name'));
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');

}