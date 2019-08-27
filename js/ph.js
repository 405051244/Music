var play=document.querySelector('.play');
var stop=document.querySelector('.stop');
var zhuanji=document.querySelector('.zhuanji');

var rotateDeg=0;
var timer=null;



$(stop).on('click',function () {
    $(play).css('display','inline-block');
    $(stop).css('display','none');
    clearInterval(timer);
    timer=setInterval(function () {
        rotateDeg++;
        zhuanji.style.transform='rotate('+rotateDeg+'deg)';
    },30);
});
$(play).on('click',function () {
    $(play).css('display','none');
    $(stop).css('display','inline-block');
    clearInterval(timer);
});
