var data=[];
// 获取元素
var audio=document.querySelector('audio');
var pic1=document.querySelector('.zhuanji');
var singer=document.querySelector('.singer');
var song=document.querySelector('.song');
var star=document.querySelector('.play1');
var star2=document.querySelector('.play2');
var stop=document.querySelector('.stop1');
var top1=document.querySelector('.top1');
var next1=document.querySelector('.next1');
var currentTime=document.querySelector('.currentTime');
var totalTime=document.querySelector('.totalTime');
var bar=document.querySelector(' .btn');
var yuan=document.querySelector('.yuan');
var now=document.querySelector('.now');

var boolean=false;//判断当前进入的播放模式
var url=decodeURIComponent(window.location.href);//获取当前的地址
var urlListss=(url.split("?")[1]);//截取地址中的参数
console.log(urlListss);
var urlList=urlListss.split("&");
console.log(urlList);
var suju={};//声明一个对象将参数放入对戏中
for (let i of urlList) {
    var d = i.split("=")
 suju[d[0]]=d[1]
}
console.log(suju);
for ( let i in suju){
    if (i==="name"){
        boolean=true
    }
}


console.log(suju.url);
console.log(suju.name);





song.innerHTML=suju.name;
var lis=null;
var index=0;
var timer;
var rotateDeg=0;
// 创建一个初始化的方法
//初始化专辑封面 歌手，歌曲名，播放时长和路径
function init() {
    rotateDeg = 0;


    for (var i = 0; i < data[index].length; i++) {
        song.innerHTML = suju.name;

        // singer.innerHTML = data[index].author;
    }
}
$.ajax({
    url: 'https://api.apiopen.top/searchMusic',
    data: {
        name:suju.name
    },
    type: 'get',
    success: function (data1) {
        data = data1.result;
        // $('.tu>img').eq(2).attr('src',data[index].pic);

        console.log(data[index].songid);
        console.log(data);
        console.log($("audio"));
        console.log(data[index].url)
    },
    error: function (err) {
        console.log(err)
    }
});
    function play() {
        pic1.src = data[index].pic;
        singer.innerHTML=data[index].author;
        audio.src ='http://music.163.com/song/media/outer/url?id='+data[index].songid+'.mp3';
        audio.play();
        // 专辑旋转
        $(star2).css('display','inline-block');
        $(stop).css('display','none');
        clearInterval(timer);
        timer = setInterval(function () {
            rotateDeg++;
            pic1.style.transform = 'rotate(' + rotateDeg + 'deg)';
        }, 30);
    }

// 播放
    star.addEventListener('click', function () {
        if (audio.paused) {
            play();
        } else {
            audio.pause();

            stop.style.display='inline-block';
            star2.style.display='none';
            clearInterval(timer);
        }
    });
// 上一曲
    top1.addEventListener('click', function () {
        index = --index < 0 ? data.length - 1 : index;

        init();
        play();
    });
// 下一曲
    next1.addEventListener('click', function () {
        index = ++index > data.length - 1 ? index = 0 : index;
        init();
        play();
    });

// 时间
audio.addEventListener('canplay',function () {
    var min=parseInt(audio.duration/60);
    var s=parseInt(audio.duration % 60);
    totalTime.innerHTML =formatTime(min)+':'+formatTime(s);
    audio.addEventListener('timeupdate',function () {
        var curr=parseInt(audio.currentTime/60);
        var currents=parseInt(audio.currentTime % 60);
        currentTime.innerHTML=formatTime(curr)+':'+formatTime(currents);
        var left=audio.currentTime/audio.duration*bar.clientWidth;
        yuan.style.left=left+'px';
        now.style.width=left+'px';
        if(audio.ended){
            index = ++index >data.length -1 ? 0:index;
            init();
            play();
        }
    });
    bar.addEventListener('click',function (e) {
        // 找到鼠标的位置
        audio.currentTime= e.offsetX/bar.clientWidth *audio.duration;
        console.log(bar.clientWidth)
    })
});

function  formatTime(time) {
    return time >9 ?time:'0'+time;
}
console.log(decodeURI(location.search));


