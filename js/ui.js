//a priori c'est une classe statique ...
var UI = function( exports ){

    var goalReached;
    var paper, size;

    var line,
        lineStart   = {x:0, y:0, ratioX:0, ratioY:0},
        lineEnd     = {x:0, y:0, ratioX:0, ratioY:0};

    var start, goal, cursor, ratioRadius;
    var currentId;


    exports.init = function( w,h) {

        paper = Raphael(0, 0, w, h);
        size = {w: w, h: h};
        this.drawLine();
        this.resize();
    };

    exports.drawLine = function(){
        paper.clear();
        console.log(size);
         line = paper.path(" M"+size.w*0.25+","+0+" L" +size.w*0.45+","+size.h).attr({
            'stroke-width':'3',
            'stroke':"white",
            'stroke-linecap': 'round'
        });
    }

    exports.resize = function(){

        var C = 1;        // canvas width to viewport width ratio
        var W_TO_H = 1/1;   // canvas width to canvas height ratio
        var el = this.canvas;

        this.viewportWidth = window.innerWidth;
        this.viewportHeight = window.innerHeight;

        this.canvasWidth = this.viewportWidth * C;
        this.canvasHeight = this.canvasWidth / W_TO_H;

        var el = $('svg')[0];

        el.style.position = "fixed";
        el.setAttribute("width", this.canvasWidth);
        el.setAttribute("height", this.canvasHeight);
        el.style.top = (this.viewportHeight - this.canvasHeight) / 2;
        el.style.left = (this.viewportWidth - this.canvasWidth) / 2;
        
        size.w = this.canvasWidth;
        size.h = this.canvasHeight; 
        if(paper)paper.setSize(size.w,size.h);

        this.drawLine();
    };

    exports.setScene = function( id )
    {
        id = id || 0;
        id %= ratios.length;
        currentId = id;
        //remove listeners (in case...)
        if( cursor ){
            cursor.undrag();
            cursor.unhover();
        }

        lineStart.ratioX = ratios[ id].lx0;
        lineStart.ratioY = ratios[ id].ly0;

        lineEnd.ratioX = ratios[ id].lx1;
        lineEnd.ratioY = ratios[ id].ly1;

        start   = {ratio:ratios[id].s, radius: 0 };
        cursor  = {ratio:ratios[id].s, radius: 40 };
        goal    = {ratio:ratios[id].g, radius: 8 };

        reset();
    };



    return exports;
}({});
