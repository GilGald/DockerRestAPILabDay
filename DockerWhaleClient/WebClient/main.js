$(function(){ // on dom ready

	$("#btnContainers").click(function(){			
		var ip = $("#vmip")[0].value;
		var port = $("#vmport")[0].value;		
		
		$.ajax({									
			url: 'http://localhost:6446/api/container/list',			
			headers: { 'hostAddress': "http://"+ip+":"+port }
		}).done(function(data){
		
			$("#containersList").append("<tr>");
			
			for (var i=0;i<data.length;i++)
			{						
				//$("#containersList").append("<td class=\"active\">"+data[i].RepoTags[0]+"</td>");
				$("#containersList >tbody>tr:last").append("<td class=\"active\">"+data[i].RepoTags[0]+"</td>");
			}
			$("#containersList").append("</tr>");
			
		});		
	});
});