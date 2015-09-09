
$(function() {
    	$('.next-link').click(function () {
		event.preventDefault();
        $("html, body").animate({ 
        	scrollTop: $('section').offset().top 
        }, 1000);


    });
});