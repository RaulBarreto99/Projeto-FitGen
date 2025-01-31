$('#btnLogin').click(function () {

    $('.popup-overlay').css('display', 'block');
    $('.popupLogin').css('display', 'block');
    $('.popupClose').css('display', 'block');
});

$('.popupClose').click(function () {

    $('.popup-overlay').css('display', 'none');
    $('.popupLogin').css('display', 'none');
});