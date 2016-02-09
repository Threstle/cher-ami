Loader.loadData('data/fr.json',function(data){
	
	window.isIpad = navigator.userAgent.match(/iPad/i) != null;
	data = JSON.parse(data);
	var projects = data.projects;
	var startY;
	var currentY;
	window.progress = 0;
	var flag;

	// var projects = MyApp.templates.projects(data);



	 $(document).ready(function(){


		// window.stats = new Stats();
		// stats.setMode( 1 ); // 0: fps, 1: ms, 2: mb
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.left = '0px';
		// stats.domElement.style.top = '0px';
		// stats.domElement.style.zIndex = '200';
		// document.body.appendChild( stats.domElement );




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
		   draw();
		});

			

	 

	 });

	$(window).bind("touchstart", function(e){
		startY = e.originalEvent.touches[0].pageY;

	});
	$(window).bind("touchmove", function(e){
		window.progress = (startY-e.originalEvent.pageY)/400;
	});
	$(window).bind("touchend", function(e){
		console.log(Math.abs(startY-e.originalEvent.pageY));
		if(startY < e.originalEvent.pageY){
			//if(!Transition.flag)Transition.previous();
		}
		else{
			//if(!Transition.flag)Transition.next();
		}
		dropWheel();
	});


	 $(window).bind('mousewheel DOMMouseScroll', function(event){
	 	if(Transition.flag)return;
	 	clearTimeout(window.wheelOver);
	 	var input = event.originalEvent.wheelDelta/1000;

	 	if(!input){
	 		input = event.originalEvent.detail/50;
	 	}
	 	
	 	if(window.tween)window.tween.kill();
	 	window.progress += input;

        if(window.progress >1)window.progress=1;
        else if(window.progress < -1)window.progress=-1;


	 	window.wheelOver = setTimeout(function(){
	 		dropWheel();
	 	},1000);

	});

	 $(window).resize(function(){
	 	
		$('#project-1 #project-content-text').css('marginTop',$(window).height()/2-$('#project-1 #project-content-text').height()/2);
		$('#project-2 #project-content-text').css('marginTop',$(window).height()/2-$('#project-2 #project-content-text').height()/2);
		$('#project-3 #project-content-text').css('marginTop',$(window).height()/2-$('#project-3 #project-content-text').height()/2);
		
	    Transition.videos[0].resize();
	    Transition.videos[1].resize();
	    Transition.videos[2].resize();
	    UI.resize();

	 })

	function update(){
		
		UI.updateInput(window.progress);
	 	Transition.updateInput(window.progress);
	}

	function change(){
		if(window.progress == -1){
			Transition.newCont = 1;
			Transition.id = Transition.idP;
		}
		if(window.progress == 1){
			Transition.newCont = 2;
			Transition.id = Transition.idN;
		}
		if(window.progress == 0)return;

		Transition.goTo();
		window.progress = 0;
		console.log('CHANGE');
	}

	function dropWheel(){

		
		var nuProg;
		if(window.progress > 0.5)nuProg = 1;
		if(window.progress > 0 && window.progress < 0.5)nuProg = 0;
		if(window.progress < 0 && window.progress > -0.5)nuProg = 0;
		if(window.progress < -0.5)nuProg = -1;


		if(!window.isIpad){
			window.tween = TweenMax.to(window,1-Math.abs(window.progress),{progress:nuProg,
				onUpdate:function(){

				},
				onComplete:function(){
					change();
				}
			});
    	}
    	else{
    		window.progress = nuProg;
			change();
    	}

	}

	function draw(){

		update();

		Transition.videos[0].draw();
		if(!window.hasPlayed){

			window.hasPlayed = true;
		}
		Transition.videos[1].draw();
		Transition.videos[2].draw();
		requestAnimationFrame(draw);
	};

});



