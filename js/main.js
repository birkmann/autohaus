$(document).ready(function() {
	$("body").removeClass("preload");
	$(".burger").click(function(){
		$("body").toggleClass("open");
	});
	$(".menu-container .bg").click(function(){
		$("body").toggleClass("open");
	});
	$(".menu-container a").click(function(){
		$("body").toggleClass("open");
	});
	$(".emotion .slides").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});
});


$(window).scroll(function(){

	if ( $(this).scrollTop() > 200 ) { 
		$('body').addClass("scrolled");
	} else { 
		$('body').removeClass("scrolled");
	}

});


$('a[href^="#"]').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - 100
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});