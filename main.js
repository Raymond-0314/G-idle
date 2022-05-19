//--------------------------------------------------------var setting 
var song = [], songBtn = [];
var name, k, mvPlayNow = -1, mvPlayLast = -1, volume = 0.15, mv  //k是for迴圈控制

//--------------------------------------------------------mv控制by id
var mv = document.getElementById("mv");
mv.volume = 0.15;
mv.style.display = "none";
mv.loop = false;

//--------------------------------------------------------按鈕控制部分song負責陰影(目的為不要btn的圓角)
//get song by id
for (k = 0; k < 8; k++) {
    name = "song" + k;
    song[k] = document.getElementById(name);
}
//get songBtn by id
for (k = 0; k < 8; k++) {
    name = "songBtn" + k;
    songBtn[k] = document.getElementById(name);
}

//--------------------------------------------------------click event
songBtn[0].addEventListener("click", function () { playMv(0) })
songBtn[1].addEventListener("click", function () { playMv(1) })
songBtn[2].addEventListener("click", function () { playMv(2) })
songBtn[3].addEventListener("click", function () { playMv(3) })
songBtn[4].addEventListener("click", function () { playMv(4) })
songBtn[5].addEventListener("click", function () { playMv(5) })
songBtn[6].addEventListener("click", function () { playMv(6) })
songBtn[7].addEventListener("click", function () { playMv(7) })
//action for click event 停止現在播放的mv並從頭播放選取的mv
function playMv(n) {
    //if (n != mvPlayNow) {
    volume = mv.volume;
    mv.src = "videotest/" + (n + 1) + ".mp4";
    if (n == 0) { mv.currentTime = 96; }
    else { mv.currentTime = 0; }
    mv.load();
    mv.play();
    mv.style.display = "inline";
    mvPlayLast = mvPlayNow;
    mvPlayNow = n;
    mouseout(mvPlayLast);
    //}
}

//-----------------------------------------------------mouseover event
songBtn[0].addEventListener("mouseover", function () { mouseover(0) })
songBtn[1].addEventListener("mouseover", function () { mouseover(1) })
songBtn[2].addEventListener("mouseover", function () { mouseover(2) })
songBtn[3].addEventListener("mouseover", function () { mouseover(3) })
songBtn[4].addEventListener("mouseover", function () { mouseover(4) })
songBtn[5].addEventListener("mouseover", function () { mouseover(5) })
songBtn[6].addEventListener("mouseover", function () { mouseover(6) })
songBtn[7].addEventListener("mouseover", function () { mouseover(7) })
//action for mouseover event 顯示陰影
function mouseover(n) {
    song[n].style.boxShadow = "0px 0px 10px rgb(0 0 0 / 80%)";
}

//-----------------------------------------------------mouseout event
songBtn[0].addEventListener("mouseout", function () { mouseout(0) })
songBtn[1].addEventListener("mouseout", function () { mouseout(1) })
songBtn[2].addEventListener("mouseout", function () { mouseout(2) })
songBtn[3].addEventListener("mouseout", function () { mouseout(3) })
songBtn[4].addEventListener("mouseout", function () { mouseout(4) })
songBtn[5].addEventListener("mouseout", function () { mouseout(5) })
songBtn[6].addEventListener("mouseout", function () { mouseout(6) })
songBtn[7].addEventListener("mouseout", function () { mouseout(7) })
//action for mouseout event 陰影消失
function mouseout(n) {
    //if (n != mvPlayNow) {
    song[n].style.boxShadow = "0px 0px 0px rgb(0 0 0 / 0%)";
    //}
}

//-----------------------------------------------------點擊logo回首頁
var home = document.getElementById("titlePhoto");
home.addEventListener("click", function () {
    mv.pause();
    mv.style.display = "none";
    mv.volume = 0.15;
    mvPlayNow = -1;
    mvPlayLast = -1;
})

//-----------------------------------------------------播放模式 重複播放或是清單播放
var playMode = document.getElementById("playMode");
var playModeNote = "nextVideo";
playMode.addEventListener("click", function () { playModeChange() })
//分別對兩種模式做出反應並改變播放模式
function playModeChange() {
    if (playModeNote == "nextVideo") {
        playMode.src = "photo/use/replay.png";
        playModeNote = "replay";
    }
    else {
        playMode.src = "photo/use/next video.png";
        playModeNote = "nextVideo";
    }
}
//對不重複播放的狀況播放下一首 若為重複播放不會增測到"ended"
mv.addEventListener("ended", function () { loop(playModeNote) });
//播放最後一首時有特例
function loop(n) {
    if (n == "replay") {
        playMv(mvPlayNow);
    }
    else if (mvPlayNow == 7) {
        playMv(0);
    }
    else {
        playMv(mvPlayNow + 1);
    }
}

//-----------------------------------------------------------------------讀取資料測試
