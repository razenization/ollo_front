(function ($) {
	$(function () {

		function toggleSlide(curEl, parentEl, minHeight) {
			if (!curEl.data('inAnimation')) {
				curEl.data('inAnimation', true);

				let optional;
				if (parentEl.attr('class').indexOf("mutual") > -1) {
					optional = '.mutual__matches-overall';
					minHeight = '150';
				}
				if (parentEl.hasClass('closed')) {
					console.log(curEl.data('baseHeight'));
					parentEl.animate({'height': curEl.data('baseHeight')}, 300);
					setTimeout(function () {
						parentEl.css({
							'padding': curEl.data('basePadding'),
							'margin': curEl.data('baseMargin'),
						});
						parentEl.children().not(curEl.parent()).not(curEl).not('p').not(optional).each(function () {
							$(this).css({'display': $(this).data('baseDisplay')});
						});
						// parentEl.children('p[class*=latest]').hide();
					}, 50);
					setTimeout(function () {
						curEl.data('inAnimation', false);
					}, 350);
				} else {
					curEl.data({
						'baseDisplay': parentEl.css('display'),
						'baseHeight': parentEl.css('height'),
						'basePadding': parentEl.css('padding'),
						'baseMargin': parentEl.css('margin'),
					});
					parentEl.animate({'height': minHeight}, 300);
					setTimeout(function () {
						parentEl.children().not(curEl.parent()).not(curEl).not('p').not(optional).each(function () {
							$(this).data('baseDisplay', $(this).css('display'));
							$(this).css({'display': 'none'});
						})
						parentEl.css({
							'padding': parentEl.css('padding-bottom') + parentEl.css('padding-top'),
							'padding-top': parentEl.css('padding-top') / 2,
							'margin': `${parentEl.css('margin-top')} 0 15px 0`,
						});
					}, 250);
					setTimeout(function () {
						curEl.data('inAnimation', false);
					}, 350);
				}
				$(parentEl).toggleClass('closed');
			}
		}

		var btn = $('#button-to-top');
		// var inAnimation = false;

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

		$('.lives__main-wrapper').each(function () {
			let mInfo = $(this).find('.match__info');
			mInfo.attr('data-height', mInfo.css('height'));
			$(this).find('.media').animate({'margin-top': parseInt(mInfo.css('height')) + 30}, 300);
			$(this).find('.media').css('margin-top', mInfo.css('height'));
		});

		$(".lives__main-tablerow td:not(.lives__extras)").click(function () {
			let wrapper = $(this).parents('.lives__main-wrapper');
			let matchInfo = wrapper.find('.match__info');
			let mediaBlock = wrapper.find('.media');

			if (!this.inAnimation) {
				let curEl = this;
				curEl.inAnimation = true;
				if (mediaBlock.css('margin-top') === '0px') {
					wrapper.find('.media').slideToggle(300);
					setTimeout(function () {
						matchInfo.css('display', 'flex');
						wrapper.find('.media').animate({'margin-top': parseInt(matchInfo.css('height')) + 30}, 300);
					}, 300);
				} else {
					wrapper.find('.media').animate({'margin-top': '0'}, 300);
					wrapper.find('.media').slideToggle(300);
					setTimeout(function () {
						matchInfo.css('display', 'none');
					}, 300);
				}
				setTimeout(function () {
					curEl.inAnimation = false
				}, 700);
			}
		});

		$('.sidenav__option').each(function () {
			$(this).click(function () {
				window.location.href = $(this).find('.sidenav__option-inner').attr("href");
			});
		});

		$('.sidenav__option.sub').hover(function () {
			if (window.matchMedia("(max-width: 540px)").matches) {
				$(this).find('.sidenav__subnav').stop().animate({
					'bottom': -$(this).find('.sidenav__subnav').height()
				}, 200);
			} else {
				$(this).find('.sidenav__subnav').stop().animate({
					'right': -$(this).find('.sidenav__subnav').width()
				}, 200);
			}
		}, function () {
			if (window.matchMedia("(max-width: 540px)").matches) {
				$(this).find('.sidenav__subnav').stop().animate({
					'bottom': 0
				}, 200);
			} else {
				$(this).find('.sidenav__subnav').stop().animate({
					'right': 0
				}, 200);
			}
		});

		$('.hide__button').click(function (e) {
			e.preventDefault();
			let curEl = $(this);
			if (curEl.hasClass('inline')) {
				parentEl = curEl.parent().parent();
				minHeight = '50';
			} else {
				parentEl = curEl.parent();
				minHeight = '50';
			}
			toggleSlide(curEl, parentEl, minHeight);
			setTimeout(function () {
				visibleElts = parentEl.children().filter(function () {
					return $(this).css('display') !== 'none' ? true : false;
				});
				visibleElts.css('cursor', 'pointer');
				visibleElts.off('click');
				visibleElts.click(function(e) {
					e.preventDefault();
					elToPass = $(this).siblings('.hide__button') || $(this);
					if (!elToPass.length) elToPass = elToPass.prevObject;
					toggleSlide(elToPass, elToPass.parent());
					visibleElts.off('click');
					visibleElts.removeAttr('style');
				});
			}, 250);
		});

		$('.media__header').click(function (e) {
			e.preventDefault();
			let curEl = $(this);
			if (curEl.hasClass('inline')) {
				parentEl = curEl.parent().parent();
				minHeight = '50';
			} else {
				parentEl = curEl.parent();
				minHeight = '50';
			}
			toggleSlide(curEl, parentEl, minHeight);
		});

		function updateScroll(){
	    	let chatBox = $('.chat__messages');
		    if (chatBox.scrollTop !== chatBox[0].scrollHeight) {
		    	chatBox.scrollTop(chatBox[0].scrollHeight);
		    }
		}
		updateScroll();
    }); // end of document ready
})(jQuery); // end of jQuery name space