(function ($) {
	$(function () {
		$('.mutual__switcher-choice').hover(
			function() {
				$('.mutual__bg').addClass('active');
				$(this).parents('.mutual__switcher-choices').addClass('hover');
			}, function () {
			});

		$('.mutual__bg').hover(
			function() {
				if ($(this).attr('class').search('active') > -1) {
					$(this).parents('.mutual__switcher-choices').addClass('hover');
				}
			}, function () {
				$(this).removeClass('active');
				$(this).parents('.mutual__switcher-choices').removeClass('hover');
			});

<<<<<<< HEAD
		$('.stats__switcher-choice').hover(
			function() {
				$('.stats__bg').addClass('active');
				$(this).parents('.stats__switcher-choices').addClass('hover');
			}, function () {
			});

		$('.stats__bg').hover(
			function() {
				if ($(this).attr('class').search('active') > -1) {
					$(this).parents('.stats__switcher-choices').addClass('hover');
				}
			}, function () {
				$(this).removeClass('active');
				$(this).parents('.stats__switcher-choices').removeClass('hover');
			});

=======
>>>>>>> 40ad228022632d9e7b03fbdb3d56e885945e6a8d
		// Custom selectbox script (modified)
		x = document.getElementsByClassName("custom-select");
		for (i = 0; i < x.length; i++) {
			selElmnt = x[i].getElementsByTagName("select")[0];
			a = document.createElement("DIV");
			a.setAttribute("class", "select-selected");
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			$(a).html('<img src="assets/img/bookies/ggbet.svg" alt="" style="margin-right: 5px;">' + selElmnt.options[selElmnt.selectedIndex].innerHTML);
			x[i].appendChild(a);
			b = document.createElement("DIV");
			b.setAttribute("class", "select-items select-hide");
			for (j = 1; j < selElmnt.length; j++) {
				c = document.createElement("DIV");
				$(c).css({
					'display': 'flex',
					'align-items': 'center'
				});
				$(c).html('<img src="assets/img/bookies/ggbet.svg" alt="" style="margin-right: 5px;">' + selElmnt.options[j].innerHTML);
				c.addEventListener("click", function(e) {
					var y, i, k, s, h;
					s = this.parentNode.parentNode.getElementsByTagName("select")[0];
					h = this.parentNode.previousSibling;
					for (i = 0; i < s.length; i++) {
						if (s.options[i].innerHTML === $(this).text()) {
							s.selectedIndex = i;
							h.innerHTML = $(this).html();
							y = this.parentNode.getElementsByClassName("same-as-selected");
							for (k = 0; k < y.length; k++) {
								y[k].removeAttribute("class");
							}
							this.setAttribute("class", "same-as-selected");
							break;
						}
					}
					h.click();
				});
				b.appendChild(c);
			}
			x[i].appendChild(b);
			a.addEventListener("click", function(e) {
				e.stopPropagation();
				closeAllSelect(this);
				this.nextSibling.classList.toggle("select-hide");
				this.classList.toggle("select-arrow-active");
			});
		}

		function closeAllSelect(elmnt) {
			var x, y, i, arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
			for (i = 0; i < y.length; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove("select-arrow-active");
				}
			}
			for (i = 0; i < x.length; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add("select-hide");
				}
			}
		}
		document.addEventListener("click", closeAllSelect);

		// Graphs
		var dials = $(".dial");

		for (i=0; i < dials.length; i++) {
			var width = (typeof $(dials[i]).attr("data-width") != 'undefined') ? Math.round($(dials[i]).attr("data-width")) : 80;
			var percent = (Number($(dials[i]).attr('data-percent')) > 0 && Number($(dials[i]).attr('data-percent')) < 100) ? Math.round(Number($(dials[i]).attr('data-percent')) * 10)/10 : 0;
			var lineWidth = (typeof $(dials[i]).attr("data-lineWidth") != 'undefined') ? Number($(dials[i]).attr("data-lineWidth")) : width / 10;
			if (lineWidth >= width) lineWidth = width + 1;
			var size = width + lineWidth;
			var lineRound = (typeof $(dials[i]).attr("data-lineRound") != 'undefined') ? true : false;
			var borderColor = $(dials[i]).css("border-color");
			var color = $(dials[i]).css("color");

			$(dials[i]).css({"width": size + 'px', "height": size + 'px', "font-size": Math.floor((width-lineWidth) / 4) + 'px'});
			$(dials[i]).prepend('<canvas id="dial' + i + '" width="' + size + '" height="' + size + '"></canvas>');

			// $("p", dials[i]).css({"line-height": size + 'px'});
			var canvas = document.getElementById("dial" + i);
			var context = canvas.getContext("2d");
			var radian = 2 * Math.PI * percent/100;

			context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 0, 2*Math.PI, false);
			context.lineWidth = lineWidth;
			context.strokeStyle = borderColor;
			context.stroke();

			context.beginPath();
			context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, Math.PI, radian/2 + Math.PI, false);
			context.strokeStyle = color;
			context.stroke();
			context.beginPath();
			context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, Math.PI - radian/2, Math.PI, false);
			context.strokeStyle = color;
			context.stroke();

			// if (lineRound == true && lineWidth < width) context.lineCap = "round";
		}
<<<<<<< HEAD

		var a = ['dog', 'cat', 'gogo'];
		a[100] = 'fox';
		console.log(a.length);
=======
>>>>>>> 40ad228022632d9e7b03fbdb3d56e885945e6a8d
	});
})(jQuery);