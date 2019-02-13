function hideTheDivs(){
	//hide initial divs
	$('#aboutSection').hide();
	$('#projectsSection').hide();
	$('#publishedSection').hide();
	$('#gisSection').hide();
	$('#thinkfulSection').hide();
	$('.shell').hide();
}

function showAndHideStuff() {
		//landing page
	$('#aboutShow').on('click', function(){
		$('#gisSection').hide();
		$('#thinkfulSection').hide();
		$('#projectsSection').hide();
		$('#publishedSection').hide();
		$('.shell').fadeIn('slow',function(){
		});
		$('#aboutSection').fadeIn('slow', function(){
		});
	});
	$('#gisShow').on('click', function(){
		$('#aboutSection').hide();
		$('#thinkfulSection').hide();
		$('#projectsSection').hide();
		$('#publishedSection').hide();
		$('.shell').fadeIn('slow', function(){
		});
		$('#gisSection').fadeIn('slow', function(){
		});
	});
	$('#thinkfulShow').on('click', function(){
		$('#aboutSection').hide();
		$('#gisSection').hide();
		$('#projectsSection').hide();
		$('#publishedSection').hide()
		$('.shell').fadeIn('slow', function(){
		});
		$('#thinkfulSection').fadeIn('slow', function(){
		});
	});
	$('#projectsShow').on('click', function(){
		$('#aboutSection').hide();
		$('#gisSection').hide();
		$('#publishedSection').hide();
		$('#thinkfulSection').hide();
		$('#pub').hide();
		$('.shell').fadeIn('slow', function(){
		});
		$('#projectsSection').fadeIn('slow', function(){
		});
	});
	$('#publishedShow').on('click', function(){
		$('#aboutSection').hide();
		$('#gisSection').hide();
		$('#thinkfulSection').hide();
		$('#projectsSection').hide();
		$('.shell').fadeIn('slow', function(){
		});
		$('#publishedSection').fadeIn('slow', function(){
		});
	});

	$('.close').on('click', function(c){
		$(this).parent().fadeOut('slow', function(c){

		});
	});

	//go back button
	$('#goHome').on('click',function(){
		window.history.back();
	});
};


$(document).ready(function(){
	//test features
	hideTheDivs();
	showAndHideStuff();
	
});