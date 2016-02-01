var Transition = function( exports )
{
    container = [];
    videos = [];

    exports.switchContainer = function(){
        var _old = container[0];
        container[0] = container[1];
        container[1] = _old;

        container[0].addClass('front');
        container[1].removeClass('front');

        container[0].fadeIn(0);
        container[1].fadeIn(0);

        _old = videos[0];
        videos[0] = videos[1];
        videos[1] = _old;
    }



    exports.init = function(projects,id){
        exports.length = projects.length;
        exports.projects = projects;
        container[0] = $('#project-1');
        container[1] = $('#project-2');

        exports.id = id;

        videos[0] = new VideoBack();
        videos[1] = new VideoBack();

        this.goTo(id);

    }

    exports.goTo = function(id){
    
        if(!id)id=exports.id;
        exports.id = id;

        loopID();

        console.log(id);
        
        p = this.projects[id];
        var proj0 = MyApp.templates.project(p);
      


        container[1].html(proj0);
        videos[1].set(container[1].find('video'),container[1].find('canvas'));

         setTimeout(function(){
              container[0].fadeOut(500,function(){
              exports.switchContainer();
             })
         },1000)
        

        
        

            	
    }

    exports.next = function(){

    	exports.id++;
    	exports.goTo();
    }

    exports.previous = function(){
    	exports.id--;
    	exports.goTo();
    }

 //    function setBack(p){
 //        var projectFront = MyApp.templates.project(p);
 //        $('#project-1').html(projectFront);
 //    }

    function loopID(){
    	if(exports.id >= exports.length-1)exports.id = 0;
    	else if(exports.id <= 0)exports.id = exports.length;
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