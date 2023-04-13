///////////////get////////////


const skipButton = document.querySelector('.skipButton');
const rainBox = document.querySelector('.rainBox');
const list_intro = document.querySelector('.list_intro');
const walk = document.querySelector('.walk');
const see = document.querySelector('.see');
const meet = document.querySelector('.meet');
const profile = document.querySelector('.profile');
const escapeButton = document.querySelector('.escapeButton');


//그는 꺽꺽대며 자꾸 습관처럼 거짓말을 하는 자신이 혐오스럽다고 이야기했다.<br>물론 거짓말이었다.
//인트로타이틀

const introTitle = document.querySelector('.introTitle');


function introType(){
    setTimeout(function(){
        introTitle.append("Through ");
    },800);
    setTimeout(function(){
        introTitle.append("gritted ");
    },1300);
    setTimeout(function(){
        introTitle.append("teeth, ");
    },1600);
    setTimeout(function(){
        introTitle.append("he told me ");
    },2000);
    setTimeout(function(){
        introTitle.append("he was disgusted ");
    },2200);
    setTimeout(function(){
        introTitle.append("with ");
    },2600);
    setTimeout(function(){
        introTitle.append("himself ");
    },2900);
    setTimeout(function(){
        introTitle.append("for ");
    },3200);
    setTimeout(function(){
        introTitle.append("lying ");
    },3400);
    setTimeout(function(){
        introTitle.append("out ");
    },3600);
    setTimeout(function(){
        introTitle.append("of ");
    },4000);
    setTimeout(function(){
        introTitle.append("habit.");
    },4200);
    setTimeout(function(){
        introTitle.append("\n");
        
    },4700);
    setTimeout(function(){
        introTitle.append("Of ");
    },5000);
    setTimeout(function(){
        introTitle.append("course, ");
    },5600);
    setTimeout(function(){
        introTitle.append("he ");
    },6100);
    setTimeout(function(){
        introTitle.append("was ");
    },6500);
    setTimeout(function(){
        introTitle.append("ly");
    },6900);
    setTimeout(function(){
        introTitle.append("ing.");
        skipButton.classList.add('fadeOut');
    },7300);
    setTimeout(function(){
        rainBox.style.opacity = 1;


        introTitle.classList.add('fadeOut');
        
        setTimeout(function(){
            skipButton.classList.add('none');
            introTitle.classList.add('none');
            list_intro.classList.add('fadeIn');
            list_intro.classList.remove('none');
        },2000);
    },8300);
}


document.addEventListener('DOMContentLoaded',introType);
skipButton.addEventListener('click',fadeIn);
///////////////////


const audio_rain = new Audio('./audio/weakRain.mp3');

var mute;



//////////function ////////////////////////////

function fadeIn(){
        rainBox.style.opacity = 1;

        skipButton.classList.remove('blink');

        skipButton.classList.add('fadeOut');
        introTitle.classList.add('fadeOut');
        
        setTimeout(function(){
            skipButton.classList.add('none');
            introTitle.classList.add('none');
            list_intro.classList.add('fadeIn');
            list_intro.classList.remove('none');
        },1400);
    }
function isNotMute(){
    mute = false;
    audio_rain.play();
}
function isMute(){
    mute = true;
}



function fadeIn_see(){
    list_intro.classList.remove('fadeIn');
    list_intro.classList.add('fadeOut');
    escapeButton.classList.remove('fadeOut');
    escapeButton.classList.add('fadeIn');
}

function fadeIn_meet(){
    list_intro.classList.remove('fadeIn');
    list_intro.classList.add('fadeOut');
    profile.classList.remove('none');
    profile.classList.remove('fadeOut');
    profile.classList.add('fadeIn');
    escapeButton.classList.remove('fadeOut');
    escapeButton.classList.add('fadeIn');
}

function escapeFunction(){
    profile.classList.remove('fadeIn');
    profile.classList.add('fadeOut');
    escapeButton.classList.remove('fadeIn');
    escapeButton.classList.add('fadeOut');
    list_intro.classList.remove('fadeOut');
    list_intro.classList.add('fadeIn');
    setTimeout(function(){
        profile.classList.add('none');
    },1000);
}



    
///////////hook///////////////////

//fadeOut
skipButton.addEventListener('click',fadeIn);
skipButton.addEventListener('click',isNotMute);

//muteCheck

//button_sound01.addEventListener('click',isNotMute);
//button_sound02.addEventListener('click',isMute);

//listEvent

see.addEventListener('click',fadeIn_see);
meet.addEventListener('click',fadeIn_meet);
escapeButton.addEventListener('click',escapeFunction);
//escape



//button_sound.addEventListener('click',alertalert);
