

var playlist = [];


$.getJSON("./text/postData.json",function(data){
//    console.log(data["song"][song0]);

    var song = data["song"];
    //음악 목록 만들기
    
   
    
    for(var i=0;i<song.length;i++){
//        var k= (song.length)-i-1;
        var songNumber = "song".concat(i);
        var songObject = song[i][songNumber];
        
//        console.log(songObject);
        
        //js재생목록 추가
        playlist[i]=songObject.url_music;
//        console.log(playlist[i]);
        
        //html 우측하단 송리스트 추가
        $(".songList > ul").append("<li></li>");
    }
    
        //클래스추가
    var i=0;
    $(".songList > ul > li").each(function(){


        var songNumber = "song".concat(i);
        var songObject = song[i][songNumber];
        $(this).addClass('song song'+i);
        $(this).append(songObject.title);
        i=i+1;

    });
});

setTimeout(function(){
    
const musicPlayer = document.querySelector('.musicPlayer');
const btn_list = document.querySelector('.btn_list');
const songList = document.querySelector('.songList');
const btn_exit_song = document.querySelector('.btn_exit_song');
    
//비디오플레이때문에 전역객체에 선언
window.btn_play = document.querySelector('.btn_play');




/////////////////////playControl///////////


const btn_FF = document.querySelector(".btn_FF");
const btn_rewind = document.querySelector(".btn_rewind");

//
//var playlist = [];
//
//playlist[0] ='./audio/songs/180522ef01-10.mp3';
//playlist[1] ='./audio/songs/181106future03_2.mp3';
//playlist[2] ='./audio/songs/181021euiseok.mp3';
//playlist[3] ='./audio/songs/181102firstSerum5.mp3';
//playlist[4] ='./audio/songs/181103trap2.mp3';
//playlist[5] ='./audio/songs/180902giri3.mp3';
//

var currentSong = Math.floor(Math.random() * (playlist.length));

console.log(currentSong);
console.log(playlist.length);
    
function checkNumber() {
   if(currentSong > playlist.length-1){
    currentSong = 0;
    console.log("changeNumber");
    }
    if(currentSong<0){
        currentSong = playlist.length-1;
    }
}

//비디오플레이때문에 전역객체에 선언
    
window.playState = false;
window.isMute = true;
window.aud = new Audio(playlist[currentSong]);

    
//function loadPlay(){
//    aud = new Audio(playlist[currentSong]);
//    aud.play();
//    playState = true;
//    changeButton();
//    console.log("aa");
//}
//document.onload = loadPlay;

    
    
    
//코멘트추가
//타이틀로변경
$.getJSON("./text/postData.json",function(data){
    var song = data["song"];
    var songNumber = "song".concat(currentSong);
    var songObject = song[currentSong][songNumber];
    $(".nowPlaying").html(songObject.title);

});

//if(currentSong)
function nextSong(){
    aud.currentTime=0;
    aud.pause();
    
    currentSong = currentSong+1;
    checkNumber();

    aud = new Audio(playlist[currentSong]);
    aud.addEventListener('timeupdate',handleProgress);
    aud.play();
    playState = true;
    changeButton();
    //코멘트추가
    $.getJSON("./text/postData.json",function(data){
        var song = data["song"];
        var songNumber = "song".concat(currentSong);
        var songObject = song[currentSong][songNumber];
        console.log(songObject.comment);
        $(".nowPlaying").html(songObject.title);
    });
}
function rewindSong(){
    aud.currentTime=0;
    aud.pause();
    
    currentSong = currentSong-1;
    checkNumber();
    aud = new Audio(playlist[currentSong]);
    aud.addEventListener('timeupdate',handleProgress);
    aud.play();
    playState = true;
    changeButton();
    //코멘트추가
    $.getJSON("./text/postData.json",function(data){
        var song = data["song"];
        var songNumber = "song".concat(currentSong);
        var songObject = song[currentSong][songNumber];
        console.log(songObject.comment);
        $(".nowPlaying").html(songObject.title);
    });
}


btn_FF.addEventListener('click',nextSong);
btn_rewind.addEventListener('click',rewindSong);


///


///////////////////////////////////////////
///////버튼바꾸기

function changeButton(){
    if(playState === true){
        btn_play.style.backgroundImage="url(img/pause.png)";
    } else{
        btn_play.style.backgroundImage="url(img/play.png)";
    }
}


function playMusic(){
    if(playState===true){
        
        aud.pause();
        playState=false;
        isMute=true;
        changeButton();

    }
    else if(playState===false){
        
        aud.play();
        playState=true;
        isMute=false;
        changeButton();

    }
}

btn_play.addEventListener('click',playMusic);




///////////////////////////////////////////////
//////////list inout

var listVisible = false;

function listIn(){
//    musicList.classList.remove('fadeOut');

    if (listVisible===true){
            songList.classList.remove('fadeUp');
            listVisible = false;
            setTimeout(function(){
            songList.classList.add('none');
            },100);
            
    }else{
            songList.classList.remove('none');
            listVisible = true;
            setTimeout(function(){
            songList.classList.add('fadeUp');
            },10);
            
            console.log("aaa");
    }
}
function listOut(){
    
    songList.classList.remove('fadeUp');
    listVisible = false;
    setTimeout(function(){
            songList.classList.add('none');
            },500);
}


btn_list.addEventListener('click',listIn);
btn_exit_song.addEventListener('click',listOut);






    

////자동재생
//setTimeout(function(){
//        var aud = new Audio(playlist[currentSong]);
//        console.log(aud);
//        aud.oncanplaythrough = function(){ 
//        aud.play();
//        };
//
//        playState = true;
//        changeButton();
//
//        console.log("aaa");
//},100);



////////////목록으로재생////////

const song = document.querySelectorAll('.song');

function checkSong(e){
    aud.pause();
//    console.log(e.target.classList[0]);
    var clicked = e.target.classList[1];
    var trans = clicked.replace('song','');
//    console.log(e);
    currentSong= trans;
    aud = new Audio(playlist[currentSong]);
    aud.addEventListener('timeupdate',handleProgress);
    aud.play();
    playState=true;
    changeButton();
    //코멘트추가
    $.getJSON("./text/postData.json",function(data){
        var song = data["song"];
        var songNumber = "song".concat(trans);
        var songObject = song[trans][songNumber];
        console.log(songObject.comment);
        console.log(currentSong);
        $(".nowPlaying").html(songObject.title);
    });
    
    
}

for(var i=0;i<song.length;i++){
    song[i].addEventListener('click',checkSong)
}




//상태바
const nowState = document.querySelector('.nowState');

function handleProgress(){

    const Percent = (aud.currentTime/aud.duration)*100;
//    console.log(aud);
//    console.log(Percent);
    nowState.style.width = `${Percent}%`;
//    console.log(Percent);
    if(Percent===100){
        nextSong();
    }
    
}

aud.addEventListener('timeupdate',handleProgress);
    
    
    
    
//비디오클릭시 오디오정지
//    
//const option = document.querySelectorAll(".option");    
//    
//function musicStopByVideo(e){
//
//    //클릭시 넘버 읽어오기
//    var clicked = e.target.classList[1];
//    console.log(e.target.classList[2]);
//    var trans = clicked.replace("option","");
//    console.log(trans);
////    console.log(post[post.length-trans]);
//    var trans2 = post.length-trans;
//    console.log(trans2);
//
//    if(e.target.classList[2]==="video"){
////        console.log("aaaa"); 
//        console.log(postVideo[trans2-1]);
////        postVideo[trans2].play();
//        console.log(aud);
//        aud.pause();
//        
//    }
//}
//    
//for(var i=0;i<option.length;i++){
//    option[i].addEventListener('click',musicStopByVideo);
//}    
//JUMP
//const durationBar =document.querySelector('.durationBar');
//function jumpMusic(e){
//    console.log(e);
//    const timeJump = (e.offsetX/e.screenX);
////    audio_song01.currentTime= timeJump;
//    console.log(timeJump);
//}
//durationBar.addEventListener('click',jumpMusic);

//
    
//document.addEventListener("canplay", function(event) {
//    console.log("DOM fully loaded and parsed");
////   
////    aud = new Audio(playlist[currentSong]);
////    aud.play();
////    playState = true;
////    changeButton();
////    console.log("aa");
//
//});    
    
    
    
},1000);



