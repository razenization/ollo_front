(function ($) {
	$(function () {

		function toggleSlide(curEl, parentEl, minHeight) {
			if (!curEl.data('inAnimation')) {
				curEl.data('inAnimation', true);

				if (curEl.hasClass('extended')) {
					// console.log(curEl.data('baseHeight'));
					parentEl.animate({'height': curEl.data('baseHeight')}, 300);
					styled = parentEl.find('*').filter(function () {
						return this.style.display ? true : false;
					});
					setTimeout(function () {
						styled.each(function () {
							$(this).css({'display': 'none'});
						});
					}, 250);
					setTimeout(function () {
						curEl.data('inAnimation', false);
					}, 350);
				} else {
					parentEl.css('height', parentEl.css('height'));
					curEl.data({
						// 'baseDisplay': parentEl.css('display'),
						'baseHeight': parentEl.css('height'),
						// 'basePadding': parentEl.css('padding'),
						// 'baseMargin': parentEl.css('margin'),
					});
					invisible = parentEl.find('*').filter(function () {
						return this.style.display === 'none' ? true : false;
					});
					let heightToAppend = 0;
					invisible.each(function () {
						heightToAppend += parseInt($(this).css('height'));
					});
					invisible.each(function () {
						$(this).css('display', $(this).data('baseDisplay'));
					});

					tableHolder = $(invisible[0]).parents('table') || $(invisible[0]).find('table') || undefined;
					bSpacing = (tableHolder.length) ? parseInt(tableHolder.css('border-spacing').split(' ')[1]) : 0;

					if (parentEl.attr('class').indexOf("latest") > -1) {
						heightToAppend = 0;
						heightToAppend += 51 * invisible.length / 2;
						heightToAppend -= bSpacing * invisible.length / 2;
					} else if (parentEl.attr('class').indexOf("mutual") > -1) {
						// console.log(parseInt($(invisible[0]).css('margin-bottom')));
						heightToAppend += parseInt($(invisible[0]).css('margin-bottom')) * invisible.length;
					} else if (parentEl.attr('class').indexOf("best") > -1) {
						heightToAppend += bSpacing * invisible.length;
					}
					// console.log(heightToAppend);
					parentEl.animate({'height': parseInt(parentEl.css('height')) + heightToAppend}, 300);

					// setTimeout(function () {
					// 	parentEl.children().not(curEl.parent()).not(curEl).not('p').not(optional).each(function () {
					// 		$(this).data('baseDisplay', $(this).css('display'));
					// 		$(this).css({'display': 'none'});
					// 	})
					// 	parentEl.css({
					// 		'padding': parentEl.css('padding-bottom') + parentEl.css('padding-top'),
					// 		'padding-top': parentEl.css('padding-top') / 2,
					// 		'margin': `${parentEl.css('margin-top')} 0 15px 0`,
					// 	});
					// }, 250);
					setTimeout(function () {
						curEl.data('inAnimation', false);
					}, 350);
				}
				$(curEl).toggleClass('extended');
			}
		}

		function toggleStream(curEl, parentEl, minHeight) {
			if (!curEl.data('inAnimation')) {
				curEl.data('inAnimation', true);

				let optional;
				if (parentEl.attr('class').indexOf("mutual") > -1) {
					optional = '.mutual__matches-overall';
					minHeight = '150';
				}
				if (parentEl.hasClass('closed')) {
					// console.log(curEl.data('baseHeight'));
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
						parentEl[0].style = '';
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
					'top': -parseInt($(this).find('.sidenav__subnav').height()) - 60
				}, 200);
			} else {
				$(this).find('.sidenav__subnav').stop().animate({
					'right': -$(this).find('.sidenav__subnav').width()
				}, 200);
			}
		}, function () {
			if (window.matchMedia("(max-width: 540px)").matches) {
				$(this).find('.sidenav__subnav').stop().animate({
					'top': 0
				}, 200);
			} else {
				$(this).find('.sidenav__subnav').stop().animate({
					'right': 0
				}, 200);
			}
		});

		$('.media__header').click(function (e) {
			e.preventDefault();
			let curEl = $(this);
			parentEl = curEl.parent();
			minHeight = '50';
			toggleStream(curEl, parentEl, minHeight);
		});

		function updateScroll(){
			let chatBox = $('.chat__messages');
			if (chatBox.scrollTop !== chatBox[0].scrollHeight) {
				chatBox.scrollTop(chatBox[0].scrollHeight);
			}
		}
		updateScroll();

		
		$('.team__results-table .team__results-row:nth-child(n+6), .mutual-match__wrapper:nth-child(n+7), .best__bookies__tablerow:nth-child(n+6)').each(function () {
			$(this).data('baseDisplay', $(this).css('display'));
			$(this).css('display', 'none');
		});

		// $('.latest-header').click(function () {
			// tempLatest[0].appendTo($('.team__results-table:first'));
			// tempLatest[1].appendTo($('.team__results-table:last'));
		// });

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
			// setTimeout(function () {
			// 	visibleElts = parentEl.children().filter(function () {
			// 		return $(this).css('display') !== 'none' ? true : false;
			// 	});
			// 	visibleElts.css('cursor', 'pointer');
			// 	visibleElts.off('click');
			// 	visibleElts.click(function(e) {
			// 		e.preventDefault();
			// 		elToPass = $(this).siblings('.hide__button') || $(this);
			// 		if (!elToPass.length) elToPass = elToPass.prevObject;
			// 		toggleSlide(elToPass, elToPass.parent());
			// 		visibleElts.off('click');
			// 		visibleElts.removeAttr('style');
			// 	});
			// }, 250);
		});

		// setInterval(function () {
			// $('.skin-main').animate({'margin-top': '15'}, 300).delay(300).animate({'margin-top': '-15'}, 300).delay(300);
			// $('.skin-main').animate({'margin-top': '-15'}, 300);
		// }, 600);

		$('.chat__box-dragtoggle').click(function (e) {
			e.preventDefault();
			chatBox = $(this).parents('.chat__box');
			let jsCbHeader = chatBox.children('.chat__box-header')[0],
			jsChatBox = chatBox[0],
			bestBlock = $('.best__bookies');
			if (chatBox.css('position') === 'absolute') {
				$('.rightbar').children('.row:first').children('div:last')[0].appendChild(jsChatBox);
				bestBlock.css('margin-top', bestBlock.data('baseMargin'));
				chatBox[0].style = '';
				jsCbHeader.onmousedown = null;
			} else {
				chatBox.data({'basePos': [e.pageX, e.pageY]});
				console.log(chatBox.data('basePos'));
				chatBox.css('width', chatBox.css('width'));
				// chatBox.css('position', 'absolute');

				var coords = getCoords(jsChatBox);
				var shiftX = e.pageX - coords.left;
				var shiftY = e.pageY - coords.top;
				bestBlock.data({'baseMargin': bestBlock.css('margin-top')});
				bestBlock.css('margin-top', parseInt(bestBlock.css('margin-top')) + parseInt(chatBox.css('height')) + parseInt(chatBox.css('margin-bottom')));

				jsChatBox.style.position = 'absolute';
				// jsChatBox.style.boxShadow = '';
				document.body.appendChild(jsChatBox);
				moveAt(e);

				jsChatBox.style.zIndex = 1000; // над другими элементами

				function moveAt(e) {
					jsChatBox.style.left = e.pageX - shiftX + 'px';
					jsChatBox.style.top = e.pageY - shiftY + 'px';
					console.log(parseInt(jsChatBox.style.top) + parseInt($(jsChatBox).css('height')) > chatBox.data('basePos')[1] - 100 && parseInt(jsChatBox.style.left) + parseInt($(jsChatBox).css('width')) > chatBox.data('basePos')[0] - parseInt($(jsChatBox).css('width')));
					if (parseInt(jsChatBox.style.top) + parseInt($(jsChatBox).css('height')) > chatBox.data('basePos')[1] && parseInt(jsChatBox.style.left) + parseInt($(jsChatBox).css('width')) > chatBox.data('basePos')[0] - parseInt($(jsChatBox).css('width'))) {
						if (bestBlock.css('margin-top') === bestBlock.data('baseMargin') && !bestBlock.data('inAnimation')) {
							bestBlock.data('inAnimation', true);
							bestBlock.animate({'margin-top': parseInt(bestBlock.css('margin-top')) + parseInt(chatBox.css('height')) + parseInt(chatBox.css('margin-bottom'))});
							setTimeout(function () {
								bestBlock.data('inAnimation', false);
							}, 300);
						}
					} else {
						if (bestBlock.css('margin-top') !== bestBlock.data('baseMargin') && !bestBlock.data('inAnimation')) {
							bestBlock.data('inAnimation', true);
							bestBlock.animate({'margin-top': bestBlock.data('baseMargin')}, 300);
							setTimeout(function () {
								bestBlock.data('inAnimation', false);
							}, 300);
						}
					}
				}

				jsCbHeader.onmousedown = function(e) {
					// if (parseInt(bestBlock.css('margin-top')) !== bestBlock.data('baseMargin')) {
					// 	bestBlock.animate({'margin-top': bestBlock.data('baseMargin')});
					// }

					coords = getCoords(jsChatBox);
					shiftX = e.pageX - coords.left;
					shiftY = e.pageY - coords.top;

					document.onmousemove = function(e) {
						moveAt(e);
					};

					jsCbHeader.onmouseup = function() {
						document.onmousemove = null;
						jsCbHeader.onmouseup = null;
					};

				}

				jsChatBox.ondragstart = function() {
					return false;
				};

				function getCoords(elem) {   // кроме IE8-
					var box = elem.getBoundingClientRect();
					return {
						top: box.top + pageYOffset,
						left: box.left + pageXOffset
					};
				}
			}
			updateScroll();
			chatBox.toggleClass('draggable');
		});

		$('.chat__box-hide').click(function (e) {
			e.preventDefault();
			curEl = $(this);
			console.log(curEl.data('inAnimation'));
			if (!curEl.data('inAnimation')) {
				curEl.data('inAnimation', true);
				let jsMsgBlock = $('.chat__messages')[0];
				if (jsMsgBlock.style.paddingRight) {
					setTimeout(function () {
						jsMsgBlock.style.paddingRight = '';
					}, 350);
				} else {
					jsMsgBlock.style.paddingRight = '6px';
				}
				$('.chat__messages').slideToggle(350);
				$('#chat__form').slideToggle(350);
				setTimeout(function () {
					curEl.data('inAnimation', false);
				}, 400);
			}
		});

		$('.chat__box-more').click(function (e) {
			e.preventDefault();
			$('.chat__box-more-inner').slideToggle();
		});
		
    }); // end of document ready
})(jQuery); // end of jQuery name space