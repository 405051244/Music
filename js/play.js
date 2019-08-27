// 红心
$(document).ready(function () {
    var heart=document.querySelector('.heart');
    var red_heart=document.querySelector('.red_heart');

    $(heart).on('click',function () {
        $(red_heart).css('display','inline-block');
        $(heart).css('display','none');
    });
    $(red_heart).on('click',function () {
        $(heart).css('display','inline-block');
        $(red_heart).css('display','none');
    })
});
