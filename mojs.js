
////waterDrop


const audio_waterDrop = new Audio('./audio/waterDrop.wav');
////

var first = new mojs.Shape({
    shape: 'circle',
    radius: {
                0: 17
            },
    stroke: '#333333',
    strokeWidth: {
                6: 0
            },
    fill: 'none',
    left: 0,
    top: 0,
    duration:800
    });
    var seconds = [];
    var colors = ['#444444', '#555555', '#666666', '#777777'];
    for (var i = 0; i < 3; i++) {
        var second = new mojs.Shape({
        parent: first.el,
        shape: 'circle',
        radius: {
                0: 'rand(1,10)'
                },
         stroke: colors[i],
         strokeWidth: {
            10:0
         },
            
        fill: 'none',
        left: '50%',
        top: '50%',
        x:'rand(-100, 100)',
        y:'rand(-30, 40)',
        opacity: {1:0},
        delay:100 
    });
 seconds.push(second);
 }
 
 document.addEventListener('click', function (e) {
     audio_waterDrop.play();
 first.tune({
 x: e.pageX,
 y: e.pageY
 }).replay();
 for(var i=0; i<seconds.length; i++){
 seconds[i].generate().replay();
 }
 })




