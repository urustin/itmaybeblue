


/////////////////////////////////////////////////////////////////

//////json 받아오기
///////////////////////////////////////////////


$(document).ready(function(){
setTimeout(function(){
//  제이슨로드
    $.getJSON("./text/postData.json",function(data){
//        console.log(data["song"]);
        var post = data["post"];
//        console.log(post[0]);
//        console.log(post[0].post00.title);
        
        
        //리스트태그추가
        
        for(var i =0; i<data["post"].length;i++){
            var k= (post.length)-i-1;
//            console.log(k);
            var postNumber = "post".concat(k);
            var postObject = post[k][postNumber];
            
            $(".postList > ul").append("<li></li>");
            
//            var a=i;
//            console.log($(".postList > ul > li"));
//            console.log(post[i]);
//            console.log(postNumber);
//            console.log(post[i][postNumber].title);
        }
        
        
        //클래스추가
        var i=0;
        $(".postList > ul > li").each(function(){
                    var k= (post.length)-i-1;
                    var j = k+1;
                    var postNumber = "post"+k;
                    var postObject = post[k][postNumber];
                    $(this).addClass('option option'+j);
                    $(this).append(postObject.title);
                    if(postObject.type==="text"){
                        $(this).addClass('text');
                    }else{
                        $(this).addClass('video');
                    }
                    i=i+1;
        })
    
        
            //postOpen
        
        for(var i =0; i<data["post"].length;i++){
        var k= (post.length)-i-1;
//            console.log(k);
        var postNumber = "post".concat(k);
        var postObject = post[k][postNumber];

        $(".postOpen > ul").append("<li></li>");
           
//            $(".postList > ul").append(postObject.title);
//            var a=i;
//            console.log($(".postList > ul > li"));
//            console.log(post[i]);
//            console.log(postNumber);
//            console.log(post[i][postNumber].title);
        }
        
        //클래스추가
        var i=0;
        $(".postOpen > ul > li").each(function(){
                    var k= (post.length)-i-1;
                    var postNumber = "post"+k;
                    var postObject = post[k][postNumber];
                    $(this).addClass('post post'+k);
                    $(this).addClass('none');
                    if(postObject.type==="text"){
                        //img 넣기
                        const elem_img = $("<img>");
                        elem_img.addClass('postImage');
                        elem_img.attr('src',postObject.url_img);
                        $(this).append(elem_img);
                        //text 넣기
                        
                        const elem_text = $("<div>");
//                        console.log(postObject.text);
                        var QW = postObject.text;
                        elem_text.addClass('postText postText'+k);
                        elem_text.html(postObject.text);
                        $(this).append(elem_text);
//                        QW.replace("\n", "<br>");
                        //video 넣기//array 순번이 맞아야 해서.//대신 none추가
                        const elem_video = $("<video>");
                        elem_video.addClass('postVideo postVideo'+k);
                        elem_video.addClass('none');
                        $(this).append(elem_video);
                    }else{
                        const elem_video = $("<video>");
                        elem_video.addClass('postVideo postVideo'+k);
                        elem_video.attr('src',postObject.url_video);
                        $(this).append(elem_video);
                    }
                    const elem_exit = $("<div>");
                    elem_exit.addClass('btn_exit_post');
                    $(this).append(elem_exit);
                    i=i+1;
        });
        

        
        
    });

},400);
});

/////////////////////////////////////
//video들 height 정하기
//////////////////////////


//
//function setVideoHeight(){
//    for(var i=0;i<postVideo.length;i++){
//        var top22 = (window.innerHeight-postVideo[i].videoHeight)/2;
//        console.log(top22);
//        postVideo[i].style.top=top22[i];
//    }
//    
//}
//for(var i=0;i<postVideo.length;i++){
//    postVideo[i].addEventListener("click",setVideoHeight);
//}



