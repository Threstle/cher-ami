Loader.loadData('data/fr.json',function(data){
	

	data = JSON.parse(data);
	var projects = MyApp.templates.projects(data);
	Transition.length = data.projects.length;
	$(document).ready(function(){
		console.log(PROJET);
		
		$('#projects').append(projects);
		Transition.goTo(PROJET);
	});


});



