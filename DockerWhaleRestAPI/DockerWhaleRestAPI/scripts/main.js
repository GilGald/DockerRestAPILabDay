$(function(){ // on dom ready

	$("#btnContainers").click(function(){
		
		
		$.ajax({
    url: 'http://localhost:6446/api/container/list',
    headers: { 'x-my-custom-header': 'some value' }
});
		/*
		$.ajax({
		url: "http://localhost:6446/api/container/list",
		beforeSend: function(request) {
		},
			
		}).done(function() {
			alert("testtttttttttt")
		});*/
		
	});


});