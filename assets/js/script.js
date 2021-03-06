$(document).ready(function () {
	$(".oferta_list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href')
			, top = $(id).offset().top - 150;
		$('body,html').animate({
			scrollTop: top
		}, 1200);
	});

	$(".nav_header_menu .nav_main_link").click(function (event) {
	    event.preventDefault();
	    var id = $(this).attr('href')
	        , top = $(id).offset().top - 100;
	    $('body,html').animate({
	        scrollTop: top
	    }, 1200);
	});

	$(".popup_nav_menu_list .nav_main_link").click(function (event) {
		event.preventDefault();
		$('.popup_nav_menu').toggleClass('popup_nav_menu_active');
		$('.nav_header_burger').toggleClass('nav_header_burger_close');
		var id = $(this).attr('href')
			, top = $(id).offset().top - 100;
		$('body,html').animate({
			scrollTop: top
		}, 1200);
	});

	$(".main_btn").click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href')
			, top = $(id).offset().top - 150;
		$('body,html').animate({
			scrollTop: top
		}, 1200);
		var newHeight = $('.program_main_viewer').css('height');
		$('.program_main_wrapper').animate({
			height : newHeight
		}, 1000);
		// $('.program_btn').animate({
		// 	opacity: 0
		// }, 500);
		// setTimeout(function(){
		$('.program_btn').css({
			visibility: 'hidden'
		})
		// }, 500);
		// $('.program_main_wrapper').addClass('program_show_wrapper');
	});



	$(".link_menu .main_link").click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href')
			, top = $(id).offset().top - 100;
		$('body,html').animate({
			scrollTop: top
		}, 1200);
	});


});



var oldNavHeight = parseInt($('.nav_header_menu_wrapper').css('height'), 10);
var navMenuStatus = false;

$('.nav_header_menu_wrapper').click(function(){
	var newHeight = parseInt($('.nav_header_menu').css('height'), 10);
	if(navMenuStatus){
		$('.nav_header_menu_wrapper').animate({
			height: oldNavHeight
		}, 600);
	} else {
		$('.nav_header_menu_wrapper').animate({
			height: newHeight + oldNavHeight
		}, 1000);
	}
	navMenuStatus = !navMenuStatus;


});




$('.hit_foto_slider_wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	nextArrow: '<div class="hit_foto_next_arrow"></div>',
	prevArrow: '<div class="hit_foto_prev_arrow"></div>',
	// adaptiveHeight: true,
	infinite: true
});




$('.foto_slider_wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	nextArrow: '<div class="hit_foto_next_arrow"></div>',
	prevArrow: '<div class="hit_foto_prew_arrow"></div>',
	// adaptiveHeight: true,
	infinite: true
});






$('.popular_slider_wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	// appendDots: '.white_block',
	arrows: true,
	nextArrow: '<div class="popular_next_arrow"></div>',
	prevArrow: '<div class="popular_prew_arrow"></div>',
	responsive: [
		{
			breakpoint: 750,
			settings: {
				arrows: false
			}
		}
	]
});




$('.article_other_slider_wrapper').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: false,
	// appendDots: '.white_block',
	arrows: true,
	nextArrow: '<div class="article_other_next_arrow"></div>',
	prevArrow: '<div class="article_other_prev_arrow"></div>'
});





$('.other_program_slider_wrapper').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: false,
	// appendDots: '.white_block',
	arrows: true,
	nextArrow: '<div class="other_program_next_arrow"></div>',
	prevArrow: '<div class="other_program_prev_arrow"></div>',
	responsive: [
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});






$('.photo_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: '<div class="photo_next_arrow photo_arrow_animate"></div>',
	prevArrow: '<div class="photo_prew_arrow photo_arrow_animate"></div>',
	dots: true,
	arrows: true,
	zIndex: 100,
	customPaging : function(slider, i) {
		var length = slider.$slides.length;
		$('.photo_count').text(length);
		return i + 1 + '/' + length;
	}
});







$('.nav_header_log_cabinet').click(function(){
	$('.popup_sign_in').addClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
});
$('.popup_nav_menu_log_cabinet').click(function(){
	$('.popup_sign_in').addClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
	$('.popup_nav_menu').toggleClass('popup_nav_menu_active');
	$('.nav_header_burger').toggleClass('nav_header_burger_close');
});

$('.popup_sign_in').click(function(event){
	if(event.target === this){
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_sign_in').removeClass('popup_sign_in_active');
		}, 600);
	};
});
$('.close_sign_in').click(function(){
	$('.popup_sign_in').removeClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
});


$('.back_to_log_out').click(function(){
	setTimeout(function(){
		$('.popup_sign_in').removeClass('popup_sign_in_active');
	}, 600);
	$('.popup_log_out').addClass('popup_log_out_active').velocity({
		opacity: 1
	}, 600);
});

$('.popup_log_out').click(function(event){
	if(event.target === this){
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_log_out').removeClass('popup_log_out_active');
		}, 600);
	};
});
$('.close_log_out').click(function(){
	$('.popup_log_out').removeClass('popup_log_out_active').velocity({
		opacity: 1
	}, 600);
});



$('.back_to_sign_in').click(function(){
	setTimeout(function(){
		$('.popup_log_out').removeClass('popup_log_out_active');
	}, 600);
	$('.popup_sign_in').addClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
});







$('.nav_header_sign_in').click(function(){
	$('.popup_sign_in').addClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
});

$('.popup_sign_in').click(function(event){
	if(event.target === this){
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_sign_in').removeClass('popup_sign_in_active');
		}, 600);
	};
});



$('.main_ad_btn').click(function(){
	$('.popup_share').addClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});

$('.popup_share').click(function(event){
	if(event.target === this){
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_share').removeClass('popup_share_active');
		}, 600);
	};
});
$('.close_share').click(function(){
	$('.popup_share').removeClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});


$('.stretching_main_share_btn').click(function(){
	$('.popup_share').addClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});


$('.home_block_share_btn').click(function(){
	$('.popup_share').addClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});


$('.crossfyt_main_share_btn').click(function(){
	$('.popup_share').addClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});


$('.gym_main_share_btn').click(function(){
	$('.popup_share').addClass('popup_share_active').velocity({
		opacity: 1
	}, 600);
});




// var link = $('.nav_header_menu li a');
// function rotateText(element) {
// 	var $target = $(element);
// 	var text = $target.text();
// 	$target.html('');
//
// 	var textArray = text.split('');
// 	var textLength = textArray.length;
// 	for(var i = 0; i < textLength; i++) {
// 		var span = document.createElement('span');
// 		span.innerHTML = textArray[i];
// 		span.style.display = 'block';
// 		$target.append(span);
// 	}
//
// }
// link.each(function( index, value){
// 	rotateText(value);
// });





$('.popup_sign_in_mob').click(function(event){
	if(event.target === this){
		$('body').css('overflow', 'auto');
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_sign_in_mob').removeClass('popup_sign_in_mob_active');
		}, 600);
	};
});




$('.play_block').click(function(){
	$('.main_video_popup_video').addClass('main_video_popup_video_active').velocity({
		opacity: 1
	}, 600);
});

$('.main_video_popup_video').click(function(event){
	if(event.target === this){
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.main_video_popup_video').removeClass('main_video_popup_video_active');
		}, 600);
	};
});
$('.close_main_video').click(function(){
	$('.main_video_popup_video_active iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	$('.main_video_popup_video').removeClass('main_video_popup_video_active').velocity({
		opacity: 1
	}, 600);
});










var target = $('.oferta_list');
if(target[0] != undefined){

	var height = $(document).height();

	var targetPosition = parseInt(target.css('top'), 10);

	var textPosition = $('.oferta_text_positi');
	var listPosition = $('.oferta_list li');
	var startPos = $(textPosition[0]).offset().top;
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		// var procent = position / height;
		// var newPosition = targetPosition * (1 - procent);
		// target.css({
		// 	top: newPosition * 0.85
		// });
		if(startPos < position){
			target.addClass('oferta_list_up');
			// $('.oferta_list').animate({
			// 	top: '20px'
			// }, 100);
		}else{
			target.removeClass('oferta_list_up');
			// $('.oferta_list').animate({
			// 	top: targetPosition
			// }, 100);
		};
		for(var i = 0; i < textPosition.length; i++){
			if($(textPosition[i]).offset().top < position + 200 ){
				listPosition.removeClass('active_oferta_list');
				$(listPosition[i]).addClass('active_oferta_list');
			}
		};
	});

};
var scroll_targets = $('.show_on_scroll');
if(scroll_targets[0] != undefined) {
	$(window).scroll(function(){
		for(var i = 0; i < scroll_targets.length; i++){
			var position = $(scroll_targets[i]).offset().top - $(window).height()*0.7;
			if(position < $(window).scrollTop()){
				$(scroll_targets[i]).animate({
					top: 0,
					opacity: 1
				}, 900);
			}
		}
	});
}




$('.gym_advantage_circle_block').click(function(){
	$('.gym_advantage_circle_block').removeClass('circle_active');
	$('.gym_show_text').removeClass('gym_show_text');
	$(this).addClass('circle_active');
	$(this).parent().find('.gym_advantage_circle_block_text').addClass('gym_show_text');
});





$('.oferta_text_title').click(function(){
	if (window.innerWidth > 768) return;
	$('.oferta_text_wrapper').animate({
		height: 0
	}, 400);
	var target = $(this).next();
	if ($(this).hasClass('oferta_text_open')){
		$(this).removeClass('oferta_text_open');
		return;
	};
	$('.oferta_text_title').removeClass('oferta_text_open');
	var childHeight = target.children().height();
	target.animate({
		height: childHeight
	}, 600);
	$(this).addClass('oferta_text_open');
});




$(".cross2_about_text_btn").click(function (event) {

	var newHeight = $('.cross2_about_text').css('height');
	$('.cross2_about_text_wrapper').animate({
		height : newHeight
	}, 1000);
	$('.cross2_about_text_btn').css({
		display: 'none'
	})

});




$('.main_slider_wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	nextArrow: '<div class="main_screen_next_arrow"></div>',
	prevArrow: '<div class="main_screen_prev_arrow"></div>',
	infinite: true,
	responsive: [
		{
			breakpoint: 750,
			settings: {
				arrows: false
			}
		}
	]
});



window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if(scrolled > 20) {
		$('.nav_header').addClass('dark_bg');
	} else {
		$('.nav_header').removeClass('dark_bg');
	};
};




$('.nav_header_burger').click(function(){
	$('.popup_nav_menu').toggleClass('popup_nav_menu_active');
	$('.nav_header_burger').toggleClass('nav_header_burger_close');
});