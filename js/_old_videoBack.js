// var VideoBack = function(v,c)
// {

// };

// VideoBack.prototype.set = function(v,c){
//     this.video = v[0];
//     this.canvas = c[0];
//     this.opacity = 0.7;
//     this.resize();


//     this.left = {
//         a:{x:this.canvasWidth*0.25,y:0},
//         b:{x:this.canvasWidth*0.45,y:this.canvasHeight},
//         c:{x:this.canvasWidth*0.45,y:this.canvasHeight},
//         d:{x:this.canvasWidth*0.25,y:0}
//     }

//     this.right = {
//         a:{x:this.canvasWidth*40.25,y:-this.canvasHeight},
//         b:{x:this.canvasWidth*40.45,y:this.canvasHeight},
//         d:{x:this.canvasWidth*1.45,y:this.canvasHeight},
//         c:{x:this.canvasWidth*1.25,y:0}
//     }


//     this.c = this.canvas.getContext('2d');

//     this.draw();


// }

// VideoBack.prototype.animate = function(cb){
//     TweenMax.to(this.left.c,2,{x:0});
//     TweenMax.to(this.left.d,2,{x:0});

//     TweenMax.to(this.right.c,2,{x:this.canvasWidth*0.25});
//     TweenMax.to(this.right.d,2,{x:this.canvasWidth*0.45,onComplete:function(){
//         if(cb)cb();
//     }});

//    // setTimeout(function(){$(this.canvas).fadeOut(2000);},1000);
//     //TweenMax.to(this.right,2,{x:this.canvasWidth/2,w:this.canvasWidth/2});
    
// }

// VideoBack.prototype.animateBack = function(){
//     this.opacity = 1;
//      TweenMax.to(this, 2,{opacity:0.5});

// }

// VideoBack.prototype.draw = function() {
//     var _this = this;
   
//     if(!_this.video||!_this.canvas)return;
    
//     // Pas top...
//     //_this.resize();
//     // var el = this.canvas;
//     // el.style.position = "fixed";
//     // el.setAttribute("width", this.canvasWidth);
//     // el.setAttribute("height", this.canvasHeight);
//     // el.style.top = (this.viewportHeight - this.canvasHeight) / 2;
//     // el.style.left = (this.viewportWidth - this.canvasWidth) / 2;
//     _this.c.drawImage(_this.video,0,0,_this.canvasWidth,_this.canvasHeight);
//      _this.c.fillStyle = "rgba(7,59,188,"+this.opacity+")";
//      _this.c.fillRect(0,0,_this.canvasWidth,_this.canvasHeight);
     
//      _this.c.fillStyle = "rgba(7,59,188,1)";
     
//     _this.drawMask();



//      // setTimeout(this.draw.bind(_this),1000/25)
//     requestAnimationFrame(this.draw.bind(_this));
// }

// VideoBack.prototype.drawMask = function(){
//     var _this = this;

//     _this.c.beginPath();
//     _this.c.moveTo(_this.left.a.x, _this.left.a.y);
//     _this.c.lineTo(_this.left.b.x, _this.left.b.y);
//     _this.c.lineTo(_this.left.c.x, _this.left.c.y);
//     _this.c.lineTo(_this.left.d.x, _this.left.d.y);
//     _this.c.closePath();
//     _this.c.fill();

//     _this.c.beginPath();
//     _this.c.moveTo(_this.right.a.x, _this.right.a.y);
//     _this.c.lineTo(_this.right.b.x, _this.right.b.y);
//     _this.c.lineTo(_this.right.c.x, _this.right.c.y);
//     _this.c.lineTo(_this.right.d.x, _this.right.d.y);
//     _this.c.closePath();
//     _this.c.fill();

  

// }

// VideoBack.prototype.resize = function(){
//     var C = 1;        // canvas width to viewport width ratio
//     var W_TO_H = 1/1;   // canvas width to canvas height ratio
//     var el = this.canvas;

//     this.viewportWidth = window.innerWidth;
//     this.viewportHeight = window.innerHeight;

//     this.canvasWidth = this.viewportWidth * C;
//     this.canvasHeight = this.canvasWidth / W_TO_H;
//     el.style.position = "fixed";
//     el.setAttribute("width", this.canvasWidth);
//     el.setAttribute("height", this.canvasHeight);
//     el.style.top = (this.viewportHeight - this.canvasHeight) / 2;
//     el.style.left = (this.viewportWidth - this.canvasWidth) / 2;


// }