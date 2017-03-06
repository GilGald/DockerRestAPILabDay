$(function(){ // on dom ready

	$("#btnContainers").click(function(){			
		var ip = $("#vmip")[0].value;
		var port = $("#vmport")[0].value;
		var url= "http://"+ip+":"+port+"/images/json";
				
		 
		$.ajax({									
			url: url,			
			type: "GET"
			//headers: { 'hostAddress': "http://"+ip+":"+port }
			headers: { "Access-Control-Allow-Origin":"*"}
			
		}).done(function(data){
			$("#containersList >tbody>tr").not("#firsttr").remove()		
			$("#containersList").append("<tr>");			
			var color=$("#containersList >tbody>tr").length%2==0?"active":"info";
			
			
			for (var i=0;i<data.length;i++)
			{										
				$("#containersList >tbody>tr:last").append("<td class=\""+color+"\">"+data[i].RepoTags[0]+"</td>");							
				$("#containersList >tbody>tr:last").append("<td class=\""+color+"\">"+data[i].Id+"</td>");
			}
			$("#containersList").append("</tr>");			
		});		
	});
});