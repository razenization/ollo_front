(function ($) {
	$(function () {

		var btn = $('#button-to-top');
		var inAnimation = false;

        $(window).scroll(function () {
            if ($(window).scrollTop() < 800) {
                btn.css("opacity", 0);
                btn.css("visibility", "hidden");
            } else {
                btn.css("opacity", 1);
                btn.css("visibility", "visible");
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });
        
		$('.banner-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 3500,
		});

		$(window).width()

		$('.lives__main-wrapper').each(function () {
			console.log($(this));
			let mInfo = $(this).find('.match__info');
			mInfo.attr('data-height', mInfo.css('height'));
			$(this).find('.media').animate({'margin-top': parseInt(mInfo.css('height')) + 25}, 300);
			$(this).find('.media').css('margin-top', mInfo.css('height'));
		});

		$(".lives__main-tablerow").click(function () {
			let wrapper = $(this).parents('.lives__main-wrapper');
			let matchInfo = wrapper.find('.match__info');
			let mediaBlock = wrapper.find('.media');

			if (!inAnimation) {
				inAnimation = true;
				console.log(mediaBlock.css('margin-top'));
				if (mediaBlock.css('margin-top') === '0px') {
					wrapper.find('.media').slideToggle(300);
					setTimeout(function () {
						matchInfo.css('display', 'flex');
						wrapper.find('.media').animate({'margin-top': parseInt(matchInfo.css('height')) + 25}, 300);
					}, 300);
				} else {
					console.log('else');
					wrapper.find('.media').animate({'margin-top': '0'}, 300);
					wrapper.find('.media').slideToggle(300);
					setTimeout(function () {
						matchInfo.css('display', 'none');
					}, 300);
				}
				setTimeout(function () {
					inAnimation = false
				}, 700);
			}
		});
    }); // end of document ready
})(jQuery); // end of jQuery name space