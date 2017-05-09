/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";
jQuery(document).ready(function($){
	$('.menu').singlePageNav(
		{filter: ':not(.external)'}
	);

	$('.flexslider').flexslider({
		animation : 'fade',
		controlNav : false,
		nextText : '',
		prevText : '',
	});

	$('.flex-caption').addClass('animated bounceInDown');

	$('.flex-direction-nav a').on('click', function() {
        $('.flex-caption').removeClass('animated bounceInDown');
        $('.flex-caption').fadeIn(0).addClass('animated bounceInDown');
    });

	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$('#go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

	$('.toggle-menu').click(function(){
        $('.menu').stop(true,true).toggle();
        return false;
    });
    $(".responsive-menu .menu a").click(function(){
        $('.responsive-menu .menu').hide();
    });


});