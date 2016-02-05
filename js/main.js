Loader.loadData('data/fr.json',function(data){
	
	window.isIpad = navigator.userAgent.match(/iPad/i) != null;
	data = JSON.parse(data);
	var projects = data.projects;
	var startY;
	var currentY;
	// var projects = MyApp.templates.projects(data);



	 $(document).ready(function(){
	 	Modernizr.on('videoautoplay', function(result){
	 		console.log(result);

		  // if(result) {
		  //   window.isIpad = false;
		  // }  else {
		  //   window.isIpad = true;
		  // }
		  Transition.init(projects,PROJET);
		   UI.init($(window).width(),$(window).height());
		   $(window).resize();
		});

			

	 

	 });

	$(window).bind("touchstart", function(e){
		startY = e.originalEvent.touches[0].pageY;

	});
	$(window).bind("touchmove", function(e){
		
	});
	$(window).bind("touchend", function(e){

		if(startY < e.originalEvent.pageY){
			if(!Transition.flag)Transition.previous();
		}
		else{
			if(!Transition.flag)Transition.next();
		}
	});


	 $(window).bind('mousewheel DOMMouseScroll', function(event){
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	       if(!Transition.flag)Transition.previous();
	    }
	    else {
	        if(!Transition.flag)Transition.next();
	    }

	  //  $(window).resize();

	});

	 $(window).resize(function(){
	 	
		$('#project-1 #project-content-text').css('marginTop',$(window).height()/2-$('#project-1 #project-content-text').height()/2);
		$('#project-2 #project-content-text').css('marginTop',$(window).height()/2-$('#project-2 #project-content-text').height()/2);
		
	    Transition.videos[0].resize();
	    Transition.videos[1].resize();
	    UI.resize();

	 })

});



