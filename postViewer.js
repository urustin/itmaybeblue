setTimeout(function(){
  
console.log("postView");    
////////////////포스트 등장/목록 되돌아가기///////////

const postList = document.querySelector(".postList");
const option = document.querySelectorAll(".option");
const post = document.querySelectorAll(".post");
const btn_exit_post = document.querySelectorAll(".btn_exit_post");
const btn_exit_main = document.querySelector(".btn_exit_main");
window.postVideo = document.querySelectorAll(".postVideo");
const body = document.querySelector("body");
 
    
    
var clickLocation;


function checkPost(e){
    
    //다른게시글 눌러도 다 초기화
    for(var i=0;i<post.length;i++){
        post[i].classList.add("none");
        postVideo[i].pause();
    }
    body.style.backgroundColor="#222222";
//    console.log(e);
    clickLocation =  window.scrollY;
//    console.log(clickLocation);
    window.scrollTo(0,0);
    
    //클릭시 넘버 읽어오기
    var clicked = e.target.classList[1];
//    console.log(e.target.classList[2]);
    var trans = clicked.replace("option","");
//    console.log(trans);
//    console.log(post[post.length-trans]);
    var trans2 = post.length-trans;
//    console.log(trans2);

    if(e.target.classList[2]==="video"){
        console.log("it'svideo"); 
//        console.log(playState);
//        console.log(postVideo[trans2-1]);
        if(playState===true){
            aud.pause();
            playState = false;
            btn_play.style.backgroundImage="url(img/play.png)";

        }
        
        
        //음악일시정지

        
        //비디오플레이
        postVideo[trans2].play();
        body.style.backgroundColor="black";
        
        setTimeout(function(){
            var setHeight = (window.innerHeight-postVideo[trans2].clientHeight)/2;
//            console.log(setHeight);
            postVideo[trans2].style.top = setHeight +"px";
        },10);
    }
    
    //조건문추가
    
    
    
    if(window.innerWidth>1220){
        post[trans2].classList.remove("none");
        //다른게시글 눌러도 음악다시재생
        if(e.target.classList[2]==="text"){
            if(!isMute){
                aud.play();
                playState = true;
                btn_play.style.backgroundImage="url(img/pause.png)";
                isMute = false;
            }
        }
        //비디오크기맞추기
        
        setTimeout(function(){
            if(window.innerWidth>1500){
                postVideo[trans2].style.width = "76%";

            }else{
                postVideo[trans2].style.width = "76%"; 

            }
            
            var setHeight = (window.innerHeight-postVideo[trans2].clientHeight)/2;
//            console.log(setHeight);
            postVideo[trans2].style.top = setHeight +"px";
        },10);
    }else{
        postList.classList.add("none");
        post[trans2].classList.remove("none");
        btn_exit_main.classList.add("none"); 
    }
    
/*    postList.classList.add("none");
    post[trans2].classList.remove("none");
    btn_exit_main.classList.add("none");*/
    
    
}

function escapePost(){
//    alert(window.innerWidth);
    btn_exit_main.classList.remove("none");
    postList.classList.remove("none");
    body.style.backgroundColor="#222222";
    for(var i=0;i<post.length;i++){
        post[i].classList.add("none");
        postVideo[i].pause();
    }
//    console.log(playState);
    //음악다시재생
    
    if(isMute===false){
        if(playState===false){
        
            console.log("playvideo"); 
            console.log(playState);

            aud.play();
            playState = true;
            btn_play.style.backgroundImage="url(img/pause.png)";
            isMute = false;

        }
    }
    
    
    //해상도가 포트레이트일때 목록 스크롤위치로 다시 돌려주기
    returnLocation();
    
//    console.log(clickLocation);
}

function returnLocation(){
    if(window.innerWidth>1220){
        
    }else{
        window.scrollTo(0,clickLocation);
        
    }
    
}
    

for(var i=0;i<option.length;i++){
    option[i].addEventListener('click',checkPost);
}

for(var i=0;i<btn_exit_post.length;i++){
    btn_exit_post[i].addEventListener('click',escapePost);
}


////////////videoPlay////////


//function postVideoPlay(e){
//    var clicked = e.target.classList[0];
//    var trans = clicked.replace("option","");
//    var trans2 = postVideo.length-trans;
//    console.log(trans2);
//    postVideo[trans2].play();
//    
//}
//for(var i=0;i<option.length;i++){
//    option[i].addEventListener('click',postVideoPlay);
//}

history.pushState(null, null, location.href);
    window.onpopstate = function () {

    if(window.innerWidth>1220){
        history.go(-1);
        //데탑해상도에서는 뒤로가기 정상작동
    }else{
        //모바일해상도에서는 뒤로가기 하면 화면지워지게
        console.log(clickLocation);
        
        history.go(1);
        escapePost();
//        returnLocation();
    }
};

    
    
    
    
    
},1600);




