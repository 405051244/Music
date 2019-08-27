//
//
(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 200);
    }, false);
})();

// window.onload = function(){
//     let setRem  = function(){
//         var ui_w = 750;
//         var wind_w = document.documentElement.clientWidth || document.body.clientWidth;
//         document.getElementsByTagName('html')[0].style.fontSize = (wind_w / ui_w) * 100 + 'px';
//     }
//     setRem();
//     window.onresize = setRem;
// }

// window.onresize = function () {
//     var ui_w = 375;
//     var wind_w = document.documentElement.clientWidth || document.body.clientWidth;
//     document.getElementsByTagName('html')[0].style.fontSize = (wind_w / ui_w) * 100 + 'px';
// };
//
// window.onload = function () {
//     var ui_w = 375;
//     var wind_w = document.documentElement.clientWidth || document.body.clientWidth;
//     document.getElementsByTagName('html')[0].style.fontSize = (wind_w / ui_w) * 100 + 'px';
//
// };


// window.onresize = function () {
//     var ui_w = 750;
//     var win_w = document.documentElement.clientWidth || document.body.clientWidth;
//     document.getElementsByTagName('html')[0].style.fontSize = (win_w / ui_w) * 100 + 'px';
// }
//
// window.onload = function () {
//     var ui_w = 750;
//     var win_w = document.documentElement.clientWidth || document.body.clientWidth;
//     document.getElementsByTagName('html')[0].style.fontSize = (win_w / ui_w) * 100 + 'px';
// };

