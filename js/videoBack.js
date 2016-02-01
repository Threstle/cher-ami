var VideoBack = function(v,c)
{

};

VideoBack.prototype.set = function(v,c){
    this.video = v[0];
    this.canvas = c[0];
    console.log("SET");

    this.c = this.canvas.getContext('2d');
    this.c.globalCompositeOperation = 'xor';
    this.draw();


}



VideoBack.prototype.draw = function() {
    var _this = this;
   
    if(!_this.video||!_this.canvas)return;

    var C = 1.4;        // canvas width to viewport width ratio
    var W_TO_H = 2/1;   // canvas width to canvas height ratio
    var el = this.canvas;

    // For IE compatibility http://www.google.com/search?q=get+viewport+size+js
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var canvasWidth = viewportWidth * C;
    var canvasHeight = canvasWidth / W_TO_H;
    el.style.position = "fixed";
    el.setAttribute("width", canvasWidth);
    el.setAttribute("height", canvasHeight);
    el.style.top = (viewportHeight - canvasHeight) / 2;
    el.style.left = (viewportWidth - canvasWidth) / 2;


   // _this.c.clearRect(0,0,canvasWidth,canvasHeight);

    _this.c.fillStyle = "blue";
    _this.c.fillRect(10, 10, 100, 100);
    //_this.c.drawImage(_this.video,0,0,canvasWidth,canvasHeight);


      setTimeout(this.draw.bind(_this),1000/25)
    //requestAnimationFrame(this.draw.bind(_this));
}
