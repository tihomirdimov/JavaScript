function marketApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewAppHome');
    $("#linkMenuAppHome").click(showAppHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuUserHome").click(showUserHomeView);
    $("#linkMenuShop").click(viewShop);
    $("#linkUserHomeShop").click(viewShop);
    $("#linkMenuCart").click(viewCart);
    $("#linkUserHomeCart").click(viewCart);
    $("#linkMenuLogout").click(logoutUser);
    $('form').on('submit', function(event) {
        event.preventDefault();
    });
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
}
