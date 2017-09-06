$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.logo-box').css({
		'transform' : 'translate(0px, '+ wScroll/5 +'%)'
	})

	$('.girl-box').css({
		'transform' : 'translate(0px, -'+ wScroll/50 +'%)'
	})

	$('.elements').css({
		'transform' : 'translate(0px, -'+ wScroll/10 +'%)'
	})
	//console.log($(window).height()/5);
	if (wScroll > $('.clothes-pics').offset().top - ($(window).height()/10)) {
		$('.clothes-pics .tmp').each(function(i){

			setTimeout(function(){
				$('.clothes-pics .tmp').eq(i).addClass('is-showing');	
			}, 150 * (i+1));
			
		});
	}

	if (wScroll > $('.large-window').offset().top - $(window).height()) {
		$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

		var opacity = (wScroll - $('.large-window').offset().top + 500) / (wScroll/4);

		$('.window-tint').css({'opacity': opacity})
	}


	if (wScroll > $('.blogD').offset().top - $(window).height()) {

		var offset =  Math.min(0, wScroll - $('.blogD').offset().top + $(window).height() - 5250);
		$('.post-1').css({'transform': 'translate(-'+(Math.abs(offset))+'px, '+(Math.abs(offset))+'px)'});
		$('.post-3').css({'transform': 'translate('+(Math.abs(offset))+'px, '+(Math.abs(offset))+'px)'});
	}
});