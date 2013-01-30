$(function(){
    var projectData = '';
    
//Section Functionaliy
$('#header').toggle(function(){
    $('#hello_section').animate({'height': '500px'}, 600);
}, function(){
    $('#hello_section').animate({'height': '250px'}, 600);
});

$('#project_header').toggle(function(){
    $('#project_section').animate({'height': '1200px'}, 600);
}, function(){
    $('#project_section').animate({'height': '250px'}, 600);
});

$('#contact').toggle(function(){
    $('#contact_section').animate({'height': '400px'}, 600);
}, function(){
    $('#contact_section').animate({'height': '250px'}, 600);
});
///////////////////////



// Project Container
    //pull in projects
        //display thumbnails in rows
    //grab width of project_list
    //make projects_container & single_project the same width

$.getJSON('project_list.json', function(data) {
  //$('#test').html(JSON.stringify(data));
  projectData = JSON.stringify(data);
  dataReady();
});

function dataReady(){
    //console.log(projectData);
       //load the thumbnails
}



    $(".project_thumb").click(function(){
        // alert('open project');

        //SWITH CONTENT OF THE PROJECT
        var slider = $('#banner-fade .bjqs');
        var sliderContent = '';
        sliderContent += '<li><img src="img/banner01.jpg" title=""></li>';
        sliderContent += '<li><img src="img/banner03.jpg" title=""></li>'; 
        sliderContent += '<li><img src="img/banner01.jpg" title=""></li>'; 
        sliderContent += '<li><img src="img/banner02.jpg" title=""></li>';  
        sliderContent += '<li><img src="img/banner03.jpg" title=""></li>'; 
        slider.html(sliderContent);
        
        //initialize/reinitialize the slider controls
        $('#banner-fade').bjqs({
            height      : 438,
            width       : 622,
            responsive  : true
          });

//$('#single_project').animate({top: '0'});
        //show the project content above project_list
        $('#project_list').animate({top: '-900'},function(){
            $('#project_list').hide();
        });
        
    });

    $("#close_btn").click(function(){
        // alert('open project');
        $('#project_list').show();
        //$('#single_project').animate({top: '900'});
        $('#project_list').animate({top: '0'});
        
        //remove slider controls and markers
        $('.bjqs-controls').remove();
        $('.bjqs-markers').remove();
    });
///////////////////////

});




jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});
