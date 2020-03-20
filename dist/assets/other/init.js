(function ($) {
	$(function () {

		var btn = $('#button-to-top');

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
			autoplaySpeed: 2000,
		});

		$(".match__main").click(function () {
			let wrapper = $(this).parents('.match__wrapper');
			// console.log($(temp).children('.match__main-content'));
			wrapper.children('.match__main-content').slideToggle();
		});
    }); // end of document ready
})(jQuery); // end of jQuery name space