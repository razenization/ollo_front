(function ($) {
	$(function () {
		function getPosition(element) {
			var xPosition = 0;
			var yPosition = 0;

			while(element) {
				xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
				yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
				element = element.offsetParent;
			}

			return { x: xPosition, y: yPosition };
		}

		$('.careers__intro-more').click(function (e) {
			$('html, body').animate({scrollTop: getPosition($('.vacancies')[0]).y}, 'slow');
		});
    }); // end of document ready
})(jQuery); // end of jQuery name space