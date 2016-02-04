Loader.loadData('data/fr.json',function(data){
	

	data = JSON.parse(data);
	var projects = data.projects;

	// var projects = MyApp.templates.projects(data);


	 $(document).ready(function(){
	// 	console.log(PROJET);
		//$(document).resize();
		
    	UI.init($(window).width(),$(window).height());
	 	Transition.init(projects,PROJET);

	 });

	 $(window).bind('mousewheel DOMMouseScroll', function(event){
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	       if(!Transition.flag)Transition.previous();
	    }
	    else {
	        if(!Transition.flag)Transition.next();
	    }
	});

	 $(window).resize(function(){
	 	   
	

	    Transition.videos[0].resize();
	    Transition.videos[1].resize();
	    UI.resize();

	 })

});



