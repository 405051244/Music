window.onresize = function () {
    var ui_w = 750;
    var win_w = document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = (win_w / ui_w) * 100 + 'px';
}

window.onload = function () {
    var ui_w = 750;
    var win_w = document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = (win_w / ui_w) * 100 + 'px';
};
