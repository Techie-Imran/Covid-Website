$(document).ready(function(){

	$('#menu').click(function(){
		$(this).toggleClass('fab fa-times');
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('load scroll',function(){

		$('#menu').removeClass('fab fa-times');
		$('.navbar').removeClass('nav-toggle');

		if($(window).scrollTop() > 0){
			$('header').addClass('sticky');
		}else{
			$('header').removeClass('sticky');
		}

		if($(window).scrollTop() > 0){
			$('.scroll-top').show();
		}else{
			$('.scroll-top').hide();
		}

		//scrollspy

		$('section').each(function(){

			let top = $(window).scrollTop();
			let offset = $(this).offset().top - 200;
			let id = $(this).attr('id');
			let height = $(this).height();

			if(top > offset && top < offset + height){
				$('.navbar a').removeClass('active');
				$('.navbar').find(`[href="#${id}"]`).addClass('active');
			}

		});

	});


});