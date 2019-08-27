var shoucang=document.querySelector('.shoucang');
var shoucang1=document.querySelector('.shoucang1');
shoucang.onclick=function () {
    shoucang1.style.display='inline-block';
    shoucang.style.display='none';
};
shoucang1.onclick=function () {
    shoucang.style.display='inline-block';
    shoucang1.style.display='none';
};
