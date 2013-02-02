$(function(){
    console.log('in proj');

    var projectData = '';

    $('.section').hover(function(){
        $(this).css("background-color", "#ffe65a");
        $('.circle',this).css("background-color", "#ffe65a");
    },function(){
        $(this).css("background-color", "white");
        $('.circle',this).css("background-color", "white");
    });

////////

    $('#resume_btn').toggle(function(){
        console.log('resume_btn');
        $('#resume').animate({height: '970px'}, 500);
        $.scrollTo('#resume', 500);
    }, function(){
        //$('html,body').animate({scrollTop:0}, 700);
        $('#resume').animate({height: '0px'}, 500);
        $.scrollTo('#resume', 500);

    });



    //Section Functionaliy
    $('#header, #arrow1').toggle(function(){
        $('#hello_section').animate({'height': '520px'}, 600);
        $('#hello_section, #header .circle').addClass('active');
    }, function(){
        $('#hello_section').animate({'height': '250px'}, 600);
        $('#hello_section, #header .circle').removeClass('active');
    });

    $('#project_header,  #arrow2').toggle(function(){
        $('#project_section').animate({'height': '1200px'}, 600, function(){
            $('#project_section').css({'height':'100%'});
        });
        $('#project_section, #project_header .circle').addClass('active');
    }, function(){
        $('#project_section').animate({'height': '250px'}, 600);
        $('#project_section, #project_header .circle').removeClass('active');
    });

    $('#contact,  #arrow3').toggle(function(){
        $('#contact_section').animate({'height': '450px'}, 600);
        $('#contact_section').addClass('active');
    }, function(){
        $('#contact_section').animate({'height': '250px'}, 600);
        $('#contact_section').removeClass('active');
    });
    ///////////////////////



// Project Container
    //pull in projects
    $.getJSON('assets/project_list.json', function(data) {
       console.log(data.projects.length);
        //var num_rows = data.projects.length / 3;
        //alert(num_rows);
        projectData = data;
        //var thumb_height = $('.project_thumb img').height();
       //alert('thumb height ='+thumb_height);  
       dataReady();

    });


    function dataReady(){
    //console.log(projectData);
        console.log('data ready');
    
        var thumbnails = "";
        //grab all thumbnails
        $.each(projectData.projects, function(item){
            console.log(item);
            //console.log(this.folder);
            thumbnails += '<div class="project_thumb" item="'+item+'" style="background:url(assets/img/projects/'+this.folder+'/rollover.jpg); background-size: 100%;">';
            thumbnails += '<img src="assets/img/projects/'+this.folder+'/thumb.jpg"/>'
            thumbnails += '</div>';
        });
        //append list to the dom
        $('#project_list').html(thumbnails);

        $(".project_thumb").hover(function(){
            $('img',this).stop().animate({opacity: 0});
        }, function(){
            $('img',this).stop().animate({opacity: 1});
        });

        $(".project_thumb").click(function(){
            //grab the number of project that was clicked
            var thisProject = $(this).attr('item');
            console.log(thisProject)
            //pass to open function
            openProject(thisProject);
            $.scrollTo('#projects_container', 500, {offset:-10});
        });
    }

    //open a specific project
    function openProject(proj){
        console.log('open');
        console.log('current proj = '+proj);
        console.log(projectData.projects[proj].title);
        
        var currentProject = projectData.projects[proj];
        var folder = currentProject.folder;
        var imageCount = currentProject.images;
        
        console.log(currentProject.title);
        console.log(currentProject.images);

        var title = $('#project_title');
        var desc = $('#project_description');

        title.html(currentProject.title);
        desc.html(currentProject.descrip);

        var slider = $('#banner-fade .bjqs');
        var sliderContent = '';
        
        for(i=1;i<imageCount+1; i++){
            console.log(i);
            sliderContent += '<li><img src="assets/img/projects/'+folder+'/banner0'+i+'.png" title=""></li>';
        }
        slider.html(sliderContent);

        //initialize/reinitialize the slider controls
        $('#banner-fade').bjqs({
            animtype      : 'slide',
            height      : 600,
            width       : 865,
            responsive  : true,
            automatic   : false,
            centercontrols  : true
          });
        //manually update size of the window to fix issues with slider 
        $(window).resize();

        //fade out thumbs
        $('#project_list').animate({opacity: '0'}, function(){
            $('#project_list').css('z-index', '0');
        });


    }

    function closeProject(){
        alert('close');
    }

    $(".close_btn").click(function(){
        console.log('close project');
        $('#project_list').css('z-index', '6');
        $('#project_list').animate({opacity: '1'}, function(){
            $('.bjqs-controls').remove();
            $('.bjqs-markers').remove();
            $(".bjqs").unwrap();
            $(".bjqs").html('');
        });
    });
///////////////////////

    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });


});




jQuery(document).ready(function($) {
 
	/*$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});*/
});
