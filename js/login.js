//Pop-up login
$('#btnLogin').click(function () {

    $('.popup-overlay').css('display', 'block');
    $('.popupLogin').css('display', 'block');
    $('.popupClose').css('display', 'block');
});

$('.popupClose').click(function () {

    $('.popup-overlay').css('display', 'none');
    $('.popupLogin').css('display', 'none');
});

//pop-up register
$('#btnRegister').click(function () {

    $('.popup-overlay-register').css('display', 'block');
    $('.popupLogin-register').css('display', 'block');
    $('.popupClose-register').css('display', 'block');
});

$('.popupClose-register').click(function () {

    $('.popup-overlay-register').css('display', 'none');
    $('.popupLogin-register').css('display', 'none');
});

//home
$('.btnEnter').click(function () {

    window.location.href = 'home.html';
});