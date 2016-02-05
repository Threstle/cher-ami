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

        exports.id = id;



        this.videos[0] = new VideoBack();
        this.videos[1] = new VideoBack();
        //$(document).resize();
         
        p = this.projects[id];
        var proj0 = MyApp.templates.project(p);
        container[0].html(proj0);
        this.videos[0].set(container[0].find('video'),container[0].find('canvas'));

        p = this.projects[id];
        var proj1 = MyApp.templates.project(p);
        container[1].html(proj1);
        this.videos[1].set(container[1].find('video'),container[1].find('canvas'));

        this.goTo(id);

    }

    exports.switchContainer = function(){
        $(window).resize();
        var _old = container[0];
        container[0] = container[1];
        container[1] = _old;

        container[0].addClass('front');
        container[1].removeClass('front');

        // container[0].fadeIn(0);
        // container[1].fadeIn(0);
        container[0].removeClass('backTransition');
        container[1].removeClass('frontTransition');

        _old = this.videos[0];
        this.videos[0] = this.videos[1];
        this.videos[1] = _old;
        this.flag = false;

    }

    exports.goTo = function(id){
        var _this = this;
       // if(!id)id=exports.id;
        //exports.id = id;

        loopID();

       
        this.flag = true;
        p = this.projects[exports.id];
        var proj0 = MyApp.templates.project(p);
        container[1].html(proj0);
        this.videos[1].set(container[1].find('video'),container[1].find('canvas'));
        setTimeout(function(){

            container[1].addClass('backTransition');
            container[0].addClass('frontTransition');
           
            _this.videos[1].animateBack();
            // this.videos[0].animate(function(){
            //        exports.switchContainer();
            // });
            UI.update(); 
            _this.videos[0].animate();
            setTimeout(function(){
              
                exports.switchContainer();
            },2000)
        },0)

  
        
       // videos[1].animateBack();
        
        

        
        

            	
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
    
    	if(exports.id >= exports.length){
            exports.id = 0;
        }
    	else if(exports.id < 0)exports.id = exports.length-1;
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