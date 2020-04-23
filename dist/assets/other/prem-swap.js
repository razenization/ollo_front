(function ($) {
	$(function () {
		function mdVersion() {
			if (window.matchMedia("(max-width: 992px)").matches) {
				$('.match__team-preview:first').detach().prependTo('.match__data-wrapper');
				$('.match__team-preview:last').detach().appendTo('.match__data-wrapper');
				$('.match__team-preview:first').find('.match__team-name').insertAfter('.match__team-logo-score:first');
				return true;
			}
			if ($('.match__data-wrapper').find('.match__team-preview').length) {
				$('.match__team-preview:first').detach().prependTo('.match__team:first');
				$('.match__team-preview:last').detach().prependTo('.match__team:last');
				$('.match__team-preview:first').find('.match__team-name').insertBefore('.match__team-logo-score:first');
			}
		}
		mdVersion();
		$(window).resize(function () {
			mdVersion();
		});
    }); // end of document ready
})(jQuery); // end of jQuery name space