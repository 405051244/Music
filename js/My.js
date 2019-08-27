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