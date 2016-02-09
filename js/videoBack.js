var VideoBack = function()
{
    this.draw(this);
    var back = document.createElement('canvas');
    var backcontext = back.getContext('2d');


};

VideoBack.prototype.set = function(v,c){
    this.video = v[0];
    this.canvas = c[0];
    this.opacity = 1;
    this.c = this.canvas.getContext('2d');

    if(window.isIpad){
        this.video = new Image(this.canvasWidth,this.canvasHeight);
        this.video.src = v[0].poster;
    }


    this.resize();

    this.left = {
        a:{x:this.canvasWidth*0.25,y:0},
        b:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        c:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        d:{x:this.canvasWidth*0.25,y:0}
    }

    this.right = {
        a:{x:this.canvasWidth,y:0},
        b:{x:this.canvasWidth,y:this.canvasHeight},
        c:{x:this.canvasWidth,y:this.canvasHeight},
        d:{x:this.canvasWidth,y:0}
    }

}

VideoBack.prototype.animate = function(input){
   // this.opacity = 0.5;
    input = Math.abs(input);

    this.left = {
        a:{x:this.canvasWidth*0.25,y:0},
        b:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        c:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        d:{x:this.canvasWidth*0.25,y:0}
    }

    this.right = {
        a:{x:this.canvasWidth,y:0},
        b:{x:this.canvasWidth,y:this.canvasHeight},
        c:{x:this.canvasWidth*1.45,y:this.canvasHeight},
        d:{x:this.canvasWidth*1.25,y:0}
    }

    // TweenMax.to(this.left.c,2,{x:0-this.canvasWidth*0.25});
    // TweenMax.to(this.left.d,2,{x:0-this.canvasWidth*0.45});
    
    //console.log(input);
     this.opacity = 1 - input;
    input = 1 - input;

    //input = Math.abs(input); 
   // console.log(input);
  

    this.left.c.x = scale(input,0,1,this.canvasWidth*0.45,-this.canvasWidth*0.25);
    this.left.d.x = scale(input,0,1,this.canvasWidth*0.25,-this.canvasWidth*0.25);

    this.right.c.x = scale(input,0,1,this.canvasWidth*1.45,-this.canvasWidth*0.25);
    this.right.d.x = scale(input,0,1,this.canvasWidth*1.25,-this.canvasWidth*0.45);

    // TweenMax.to(this.right.c,2,{x:this.canvasWidth*0.45});
    // TweenMax.to(this.right.d,2,{x:this.canvasWidth*0.25});
    
}

VideoBack.prototype.animateBack = function(input){

        input = Math.abs(input);

    this.left = {
        a:{x:this.canvasWidth*0.25,y:0},
        b:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        c:{x:this.canvasWidth*0.45,y:this.canvasHeight},
        d:{x:this.canvasWidth*0.25,y:0}
    }

    this.right = {
        a:{x:this.canvasWidth,y:0},
        b:{x:this.canvasWidth,y:this.canvasHeight},
        c:{x:this.canvasWidth*1.45,y:this.canvasHeight},
        d:{x:this.canvasWidth*1.25,y:0}
    }
    //console.log(this.opacity);
        //this.opacity = 1 - (input*0.5);

     //TweenMax.to(this, 3,{opacity:1-(input*0.5)});
     
}

VideoBack.prototype.draw = function() {
    var _this = this;

    if(!_this.video||!_this.canvas||!_this.c){

    }
    else{
    
  

    var el = this.canvas;


    el.setAttribute("height", this.canvasHeight);
        this.c.globalAlpha = _this.opacity;
        _this.c.drawImage(_this.video,-_this.opacity*250,-_this.opacity*250,_this.canvasWidth+_this.opacity*500,_this.canvasHeight+_this.opacity*500);
        this.c.globalAlpha = 1;
        _this.c.globalCompositeOperation = "destination-out";
        _this.drawMask();

    }

    
}

VideoBack.prototype.drawMask = function(){
    var _this = this;
    //_this.c.fillStyle = "rgba(255,255,255,1)";
    _this.c.beginPath();
    _this.c.moveTo(_this.left.a.x, _this.left.a.y);
    _this.c.lineTo(_this.left.b.x, _this.left.b.y);
    _this.c.lineTo(_this.left.c.x, _this.left.c.y);
    _this.c.lineTo(_this.left.d.x, _this.left.d.y);

     _this.c.moveTo(_this.right.a.x, _this.right.a.y);
     _this.c.lineTo(_this.right.b.x, _this.right.b.y);
     _this.c.lineTo(_this.right.c.x, _this.right.c.y);
     _this.c.lineTo(_this.right.d.x, _this.right.d.y);

     _this.c.fill();

  

}

VideoBack.prototype.resize = function(){

    var C = 1.1;        // canvas width to viewport width ratio
    var W_TO_H = 16/9;   // canvas width to canvas height ratio
    var el = this.canvas;

    if(window.isIpad){
        C = 1.5;
    }

    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;

    this.canvasWidth = Math.floor(this.viewportWidth * C);
    this.canvasHeight = Math.floor(this.canvasWidth / W_TO_H);
    el.style.position = "fixed";
    el.setAttribute("width", this.canvasWidth);
    el.setAttribute("height", this.canvasHeight);
    el.style.top = Math.floor((this.viewportHeight - this.canvasHeight) / 2);
    el.style.left = Math.floor((this.viewportWidth - this.canvasWidth) / 2);



}