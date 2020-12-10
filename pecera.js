var pez2;

const init = function(pro){
    with (pro) {
        size(500,500);
        frameRate(600);
        background(174, 228, 235);
    }
};

function drawAfter(pro,callback){
    pez2 = pro.loadImage("pez2.png");
    setInterval(() => {
    	for(var x=0; x<500; x+=100){
    		for (var y=0; y<500; y+=100)
    	callback(pez2,x ,y, 80, 80)
    }
        
    },350);
}
var sketchProc = function(processingInstance){
	with(processingInstance){
       init(processingInstance)
        drawAfter(processingInstance, image);
    }
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);
