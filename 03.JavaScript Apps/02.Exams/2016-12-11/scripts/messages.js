//problems with escaping default actions with the submit buttons
//problems with formatting date
function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewAppHome');
    $("#linkMenuAppHome").click(showAppHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuUserHome").click(showUserHomeView);
    $("#linkMenuMyMessages").click(viewMyMessages);
    $("#linkUserHomeMyMessages").click(viewMyMessages);
    $("#linkMenuArchiveSent").click(viewSentMessages);
    $("#linkUserHomeArchiveSent").click(viewSentMessages);
    $("#linkMenuSendMessage").click(sendNewMessage);
    $("#linkUserHomeSendMessage").click(sendNewMessage);
    $("#linkMenuLogout").click(logoutUser);
    $('form').on('submit', function(event) {
        event.preventDefault();
    });
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $("#formSendMessage").submit(sendMessage);
}
