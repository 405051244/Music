var listBox=document.querySelector('.listen_box ul');
var data=[];
// 获取元素
var queding=document.querySelector('.queding');
var audio=document.querySelector('audio');
var searchTxt=document.querySelector('#searchTxt');
var lis=null;
var index=0;
queding.addEventListener('click',function () {
    // 搜索音乐
    // AJAX请求
    $.ajax({
        // searchMusic?name=不要说话
        url: 'https://api.apiopen.top/searchMusic?',
        data: {
            name: searchTxt.value
        },
        type: 'get',
        success: function (data2) {
            data = data2.result;
            // h2.innerHTML =data.title;
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += '<li><span>' + data[i].title + '</span><span>'
                for (var j=0;j<data[i].length;j++){
                    str+=data[i].author+'  ';
                }

            }
            str += '</span></li>';
            listBox.innerHTML = str;
            lis = document.querySelectorAll('li');


            $('.listen_box ul').on('click','li',function () {
                index=$ (this).index();
                var nam = data[index].title;
                var url = data[index].url;
                var singer = data[index].author;
                var pic1 = data[index].pic;
                window.location='play.html?name='+nam+'&url='+url+'&singer'+singer+''+pic1+'';
                audio.play();
            });
        },
        error: function (err) {
            console.log(err);
        }
    })
});
//标识当前第几首歌
// 旋转角度
var rotateDeg=0;
// 保存定时器
var timer=null;
// 标识当前播放顺序 1是循环2单曲3随机
var moshi=0;
// 保存图片的positionY轴的值
var moshiArr=[-203,-230,-72];

