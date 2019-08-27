














// banner轮播图
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        autoplayDisableOnInteraction: false,
    },
    pagination: '.swiper-pagination',
    dynamicBullets: true
});

// 侧边栏隐藏
window.onload = function () {
    $('.hea .icon1').click(function () {
        console.log('a');
        $('.in1').show('fast');
        $('.in-list').show('fast');

    })
    $('.in1').click(function () {
        $('.in1').hide('fast');
        $('.in-list').hide('fast');
    })
};


function fn() {
    window.location.href = "Listen.html";
};

