$('#ting-t1').click(function () {
    console.log('a');
    $('.ting-t2').removeClass('active');
    $('#ting-t1').addClass('active');

});
$('.ting-t2').click(function () {
    $('.ting-t2').addClass('active');
    $('#ting-t1').removeClass('active');
});



//18秒倒计时
var min = 18;
var time;
var rota = 0;
$('.ting-out img').click(function () {
    $('.dao').html('18');
    min = 18;
    clearInterval(time);
    time = setInterval(fn, 1000);

});

function fn() {
    min = --min;
    if (min > 0) {
        $('.dao').html(min);
        clearInterval(timer);
        timer = setInterval(function () {
            rota++;
            im.style.transform = 'rotate(' + rota + 'deg)';
        }, 30);
    } else {
        min = 0;
        $('.dao').html('18');
        clearInterval(timer);
    }
    ;
};
var timer;
var im = document.querySelector('.ting-out img');
$('.ting-ti').click(function () {
    clearTimeout(time);
    clearInterval(timer);
    $('.dao').html(min);
    console.log(min);
});


