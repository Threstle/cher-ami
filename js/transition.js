var Transition = function( exports )
{
    container = [];
    exports.videos = [];
    exports.flag;

    exports.init = function(projects,id){
        exports.length = projects.length;
        exports.projects = projects;
        container[0] = $('#project-1');
        container[1] = $('#project-2');
        container[2] = $('#project-3');

        exports.id = id;
        exports.newCont = 0;

        this.videos[0] = new VideoBack();
        this.videos[1] = new VideoBack();
        this.videos[2] = new VideoBack();


        this.goTo(id,true);

    }

    exports.updateInput = function(input){

        exports.input = input;
        this.videos[0].animate(input);

        $(container[0]).find('#project-content').css('opacity', 1-Math.abs(input*4));
      //  this.videos[0].opacity = 1 - input;

        if(input < 0){
            
            $(this.videos[2].canvas).css('display','none');
            $(this.videos[1].canvas).css('display','block');
            this.videos[1].animateBack(input);

          //  $(container[1]).find('#project-content').css('opacity',Math.abs(input*4));
        }
        else{
            $(this.videos[1].canvas).css('display','none');
            $(this.videos[2].canvas).css('display','block');
           // $(container[2]).find('#project-content').css('opacity',Math.abs(input*4));
           // this.videos[1].opacity = 0;
            this.videos[2].animateBack(input);
        }


    }

    exports.goTo = function(id,first){
        var _this = this;

        loopID();

        this.flag = true;
        var p = this.projects[exports.id];
        var pN = this.projects[exports.idN];
        var pP = this.projects[exports.idP];

        var proj = MyApp.templates.project(p);
        var projN = MyApp.templates.project(pN);
        var projP = MyApp.templates.project(pP);

   

        if(!first){
           
            var _old = container[0];
            $(container[0]).removeClass('front');
            container[0] = container[this.newCont];
            container[this.newCont] = _old;
            $(container[0]).addClass('front');

            _old = this.videos[0];
            this.videos[0] = this.videos[this.newCont];
            this.videos[this.newCont] = _old;
            if(this.videos[1].video.play)this.videos[0].video.play();
        }
        else{

            container[0].html(proj);
            this.videos[0].set(container[0].find('video'),container[0].find('canvas'));
            $(this.videos[0].video).on('canplaythrough',function(){
                 this.play();
            });
        }


        container[1].html(projP);
        container[2].html(projN);

        
        this.videos[1].set(container[1].find('video'),container[1].find('canvas'));
        this.videos[2].set(container[2].find('video'),container[2].find('canvas'));


        // if(this.videos[1].video.play)
        // if(this.videos[2].video.play)

        var _this = this;
        $(this.videos[1].video).on('canplaythrough',function(){
            this.play();

           
        });

        $(_this.videos[2].video).on('canplaythrough',function(){
                _this.updateInput(0);
                this.play();
                _this.flag = false;


        });
        
        
        if(!first){
             $(window).resize();
         }

         
    }

    exports.next = function(){

    	exports.id++;
    	exports.goTo(exports.id);
    }

    exports.previous = function(){
    	exports.id--;
    	exports.goTo(exports.id);
    }


    function loopID(){
        exports.idN = exports.id+1;
        exports.idP = exports.id-1;
    	if(exports.id >= exports.length || exports.id == 0){
            exports.id = 0;
            exports.idN = 1;
            exports.idP = exports.length-1;
        }
    	else if(exports.id < 0 || exports.id == exports.length-1){
            exports.id = exports.length-1;
            exports.idN = 0;
            exports.idP = exports.length-2;
        }

        console.log(exports.idP);
    }





    return exports;

}({});