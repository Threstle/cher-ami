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

        this.videos[0] = new VideoBack();
        this.videos[1] = new VideoBack();
        this.videos[2] = new VideoBack();
        //$(document).resize();
         
        // p = this.projects[id];
        // var proj0 = MyApp.templates.project(p);
        // container[0].html(proj0);
        // this.videos[0].set(container[0].find('video'),container[0].find('canvas'));

        // p = this.projects[id];
        // var proj1 = MyApp.templates.project(p);
        // container[1].html(proj1);
        // this.videos[1].set(container[1].find('video'),container[1].find('canvas'));



        // this.videos[0].set(container[0].find('video'),container[0].find('canvas'));
        // this.videos[1].set(container[1].find('video'),container[1].find('canvas'));
        // this.videos[2].set(container[2].find('video'),container[2].find('canvas'));

        this.goTo(id,true);

    }

    exports.switchContainer = function(){
        // $(window).resize();
        // var _old = container[0];
        // container[0] = container[1];
        // container[1] = _old;

        // container[0].addClass('front');
        // container[1].removeClass('front');

        // // container[0].fadeIn(0);
        // // container[1].fadeIn(0);
        // container[0].removeClass('backTransition');
        // container[1].removeClass('frontTransition');

        // _old = this.videos[0];
        // this.videos[0] = this.videos[1];
        // this.videos[1] = _old;
        // this.flag = false;



    }

    exports.updateInput = function(input){

        exports.input = input;
        this.videos[0].animate(input);

        $(container[0]).find('#project-content').css('opacity',1-Math.abs(input*2));

        if(input < 0){
          //  this.videos[2].opacity = 0;
            $(this.videos[2].canvas).css('display','none');
            $(this.videos[1].canvas).css('display','block');
            this.videos[1].animateBack(input);

            $(container[1]).find('#project-content').css('opacity',Math.abs(input*2));
        }
        else{
            $(this.videos[1].canvas).css('display','none');
            $(this.videos[2].canvas).css('display','block');
            $(container[2]).find('#project-content').css('opacity',Math.abs(input*2));
           // this.videos[1].opacity = 0;
            this.videos[2].animateBack(input);
        }

        // if(input == 1){
        //     this.id = this.idN;
        //     this.goTo();
        // }
        // else if(input == -1){
        //     this.id = this.idP;
        //     this.goTo();
        // }
        
        // this.videos[2].animate(input);
      //  this.videos[1].animateBack(input);


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

        // container[1].html(proj)
        // container[2].html(projN)
        // container[3].html(projP)

        // if(exports.input>0)container[0] = container[2];
        // if(exports.input<0)container[0] = container[1];

        if(!first){
            var _old = container[0];
            $(container[0]).removeClass('front');
            container[0] = container[2];
            container[2] = _old;
            $(container[0]).addClass('front');

            _old = this.videos[0];
            this.videos[0] = this.videos[2];
            this.videos[2] = _old;

        }
        else{
            container[0].html(proj);
            this.videos[0].set(container[0].find('video'),container[0].find('canvas'));
        }


        //container[0].html(proj);
        container[1].html(projP);
        container[2].html(projN);

        
        this.videos[1].set(container[1].find('video'),container[1].find('canvas'));
        this.videos[2].set(container[2].find('video'),container[2].find('canvas'));

        this.videos[0].video.play();

        this.videos[1].video.play();
        this.videos[2].video.play();
        // this.videos[1].video.pause();
        // this.videos[2].video.pause();

        //
        this.updateInput(0);
        // loopID();
       // $(window).resize();
       
        // this.flag = true;
        // p = this.projects[exports.id];
        // var proj0 = MyApp.templates.project(p);
        // container[1].html(proj0);
        // this.videos[1].set(container[1].find('video'),container[1].find('canvas'));
        // setTimeout(function(){

        //     container[1].addClass('backTransition');
        //     container[0].addClass('frontTransition');
           
        //     _this.videos[1].animateBack();
        //     // this.videos[0].animate(function(){
        //     //        exports.switchContainer();
        //     // });
        //     UI.update(); 
        //     _this.videos[0].animate();
        //     setTimeout(function(){
              
        //         exports.switchContainer();
        //     },2000)
        // },0)

  

        
        

        
        

            	
    }

    exports.next = function(){

    	exports.id++;
    	exports.goTo(exports.id);
    }

    exports.previous = function(){
    	exports.id--;
    	exports.goTo(exports.id);
    }

 //    function setBack(p){
 //        var projectFront = MyApp.templates.project(p);
 //        $('#project-1').html(projectFront);
 //    }

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

 //    function switchTransition(){
 //        if(currentProject == 0)setCurrent(1);
 //        else setCurrent(0);
 //    }

 //    function setCurrent(id){
 //        currentProject = id;
 //        $('.project').removeClass('front');
 //        container[id].addClass('front');

 //    }



    return exports;

}({});