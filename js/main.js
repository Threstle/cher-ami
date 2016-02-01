Loader.loadData('data/fr.json',function(data){
	

	data = JSON.parse(data);
	var projects = data.projects;

	// var projects = MyApp.templates.projects(data);


	 $(document).ready(function(){
	// 	console.log(PROJET);
		
    	
	 	Transition.init(projects,PROJET);
	 });



});



