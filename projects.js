// alert('projects');

// $.ajax('project_list.json', function(data, textStatus) {
//         alert('Status is '+textStatus);
//         alert('JSON data string is: '+data);
//     }, 'text');  

//grab height of
 // var projectHeight = $("#project_list").height();
 // $('#single_project').height(projectHeight);


$(function(){
	$(".project_thumb").click(function(){
		// alert('open project');
		$('#single_project').animate({top: '-600'});
	});

	$("#close_btn").click(function(){
		// alert('open project');
		$('#single_project').animate({top: '600'});
	});

	

})




