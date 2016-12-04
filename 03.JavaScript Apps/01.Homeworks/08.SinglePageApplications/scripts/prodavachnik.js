function prodavachnikApp() {
    showHideMenuLinks();
    showView('viewHome');
    sessionStorage.clear(); // Clear user auth data
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
}
