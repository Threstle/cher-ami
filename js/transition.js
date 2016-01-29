var Transition = function( exports )
{
	exports.length = 0;

    exports.goTo = function(id){
    
        if(!id)id=exports.id;
        exports.id = id;

        loopID();
    	
    	$('.project').removeClass('front');

    	$('#project'+id).addClass('front');

    	
    }

    exports.next = function(){

    	exports.id++;
    	exports.goTo();
    }

    exports.previous = function(){
    	exports.id--;
    	exports.goTo();
    }

    function loopID(){
    	console.log(exports.id);
    	if(exports.id >= exports.length-1)exports.id = 0;
    	else if(exports.id <= 0)exports.id = exports.length;
    }

    return exports;

}({});