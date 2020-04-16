(function ($) {
	$(function () {
		var dataToPass, bgToPass;

		var canvas = document.getElementById('nw-chart');
		if (canvas) {
			dataToPass = [2700, -5000, 5780, 5162, 5112];
			var nwChart = new Chart(canvas, {
				type: 'line',
				data: {
					labels: ['1', '2', '3', '4', '5'],
					datasets: [{
				// fillColor : 'linear-gradient(rgba(43, 123, 251, 0.1) 0%, rgba(255, 255, 255, 0) 135.16%)',
				fillColor : '#2B7BFB',
				label: 'Networth',
				data: dataToPass,
				backgroundColor: 'rgba(43, 123, 251, 0.2)',
				borderColor: '#2B7BFB',
				borderWidth: '1',
			}]
		},
		options: {
			elements: {
				point:{
					radius: 3
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				xAxes: [{
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						color: "transparent",
						display: true,
						drawBorder: false,
						zeroLineColor: "#ccc",
						zeroLineWidth: 1
					},
					ticks: {
						max: 10000,
						min: -10000,
						maxTicksLimit: 3,
					}
				}]
			}
		}
	});
		}

		var avgKillsCanvas = document.getElementById('avg-kills-chart');
		if (avgKillsCanvas) {
			dataToPass = [20, 80];
			dataToPass[0] > dataToPass[1] ? bgToPass = ['#E74C3C', 'rgba(61, 66, 116, 0.4)'] : bgToPass = ['rgba(231, 76, 60, 0.4)', '#3D4274']
			var avgKillsChart = new Chart(avgKillsCanvas, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: dataToPass,
						backgroundColor: bgToPass,
						label: 'Dataset 1'
					}],
					labels: [
					'Vitality',
					'Spirit',
					]
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					cutoutPercentage: 60,
					legend: {
						display: false
					},
					animation: {
						animateScale: true,
						animateRotate: true
					},
					elements: {
						center: {
							text: 'Avg Kills',
							subtext: 'per map',
					color: '#000', //Default black
					fontStyle: 'Inter', //Default Arial
					sidePadding: 15 //Default 20 (as a percentage)
				}
			}
		}
	});
		}

		var avgDeathsCanvas = document.getElementById('avg-deaths-chart');

		if (avgDeathsCanvas) {
			dataToPass = [80, 20];
			dataToPass[0] > dataToPass[1] ? bgToPass = ['#E74C3C', 'rgba(61, 66, 116, 0.4)'] : bgToPass = ['rgba(231, 76, 60, 0.4)', '#3D4274']
			var avgDeathsChart = new Chart(avgDeathsCanvas, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: dataToPass,
						backgroundColor: bgToPass,
						label: 'Dataset 1'
					}],
					labels: [
					'Vitality',
					'Spirit',
					]
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					cutoutPercentage: 60,
					legend: {
						display: false
					},
					animation: {
						animateScale: true,
						animateRotate: true
					},
					elements: {
						center: {
							text: 'Avg Deaths',
							subtext: 'per map',
					color: '#000', //Default black
					fontStyle: 'Inter', //Default Arial
					sidePadding: 15 //Default 20 (as a percentage)
				}
			}
		}
	});
		}

		var compareCanvas = document.getElementById('player-compare');
		if (compareCanvas) {
			// var ctx = compareCanvas.getContext('2d');
			var compareChart = new Chart(compareCanvas, {
				type: 'radar',
				data: {
					labels: ['WIN %', 'MVP', 'FP', 'KILLS', 'KDA', 'K/D', 'ACC', 'DPR'],
					datasets: [{
						data: [55, 82, 44, 66, 72, 42, 77, 88,],
						// backgroundColor: 'rgba(43, 123, 251, 0.15)',
						borderColor: '#E74C3C',
						borderWidth: 1,
						backgroundColor: 'rgba(231, 76, 60, 0.13)',
						pointBackgroundColor: "#E74C3C"
						// fill: false,
					}, {
						data: [72, 42, 77, 88, 55, 82, 44, 66,],
					// backgroundColor: 'rgba(43, 123, 251, 0.15)',
					borderColor: '#3D4274',
					borderWidth: 1,
					backgroundColor: 'rgba(61, 66, 116, 0.13)',
					pointBackgroundColor: "#3D4274"
					// fill: false,
				}]
			},
			options: {
				animation : {
					onComplete : function () {

					}
				},
				elements : {
					point : {
						radius: 2,
					}
				},
				responsive: false,
				legend: {
					display: false,
				},
				scale: {
					angleLines: {
						display: false
					},
					ticks: {
						display: false,
						// maxTicksLimit: 2,
						// fontSize: 10,
						// backdropColor: 'black',
						max: 100,
						min: 0,
						showLabelBackdrop: false,
					},
					pointLabels:{
						fontColor: "#000",
					},


					gridLines: {
						display: false
					},
				}
			}
		});

			var bgCanvas = document.getElementById('player-compare-bg');
			var bgCtx = bgCanvas.getContext('2d');
			bgCtx.globalCompositeOperation='destination-over';
			var numberOfSides = 8, size = 64, vertexes = [];
			// bgCtx.translate(-10, -12);

			// bgCtx.beginPath();
			bgCtx.moveTo (compareChart.scale.xCenter +  size * Math.cos(0), compareChart.scale.yCenter +  size *  Math.sin(0));


			for (var i = 1; i <= numberOfSides; i += 1) {
				let curPoint = [compareChart.scale.xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), compareChart.scale.yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides)];
				// bgCtx.lineTo(curPoint[0], curPoint[1]);
				vertexes.push(curPoint);
			}

			bgCtx.strokeStyle = "rgba(43, 123, 251, 1)";
			// bgCtx.fillStyle = "rgba(43, 123, 251, 0.07)";
			bgCtx.lineWidth = 1;
			bgCtx.stroke();
			bgCtx.fill();

			bgCtx.beginPath();
			bgCtx.strokeStyle = "#fff";
			bgCtx.lineWidth = 3;
			for (var i = 0; i < vertexes.length; i++) {
				bgCtx.moveTo(compareChart.scale.xCenter, compareChart.scale.yCenter);
				bgCtx.lineTo(vertexes[i][0], vertexes[i][1]);
			}
			bgCtx.stroke();


			bgCtx.beginPath();
			bgCtx.moveTo (compareChart.scale.xCenter +  size * Math.cos(0), compareChart.scale.yCenter +  size *  Math.sin(0));
			for (var i = 0; i < vertexes.length; i++) {
				bgCtx.lineTo(vertexes[i][0], vertexes[i][1]);
			}
			// bgCtx.strokeStyle = "rgba(43, 123, 251, 1)";
			bgCtx.fillStyle = "rgba(43, 123, 251, 0.25)";
			bgCtx.lineWidth = 1;
			bgCtx.stroke();
			bgCtx.fill();
		}


		Chart.pluginService.register({
			beforeDraw: function (chart) {
				if (chart.config.options.elements.center) {
					//Get ctx from string
					var ctx = chart.chart.ctx;

					//Get options from the center object in options
					var centerConfig = chart.config.options.elements.center;
					var fontStyle = centerConfig.fontStyle || 'Arial';
					var txt = centerConfig.text;
					var subtxt = centerConfig.subtext;
					var color = centerConfig.color || '#000';
					var sidePadding = centerConfig.sidePadding || 20;
					var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
					//Start with a base font of 30px
					ctx.font = "30px " + fontStyle;

					//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
					var stringWidth = ctx.measureText(txt).width;
					var subStringWidth = ctx.measureText(subtxt).width;

					var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;


					// Find out how much the font can grow in width.
					var widthRatio = elementWidth / stringWidth;
					// var newFontSize = Math.floor(30 * widthRatio);
					var newFontSize = Math.floor(27 * widthRatio);

					var subWidthRatio = elementWidth / subStringWidth;
					var newSubFontSize = Math.floor(20 * subWidthRatio);

					var elementHeight = (chart.innerRadius * 2);

					// Pick a new font size so it will not be larger than the height of label.
					var fontSizeToUse = Math.min(newFontSize, elementHeight);
					var subFontSizeToUse = Math.min(newSubFontSize, elementHeight);

					//Set font settings to draw it correctly.
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					var posX = ((chart.chartArea.left + chart.chartArea.right) / 2);
					var posY = ((chart.chartArea.top + chart.chartArea.bottom) / 2.2);
					ctx.font = fontSizeToUse + "px " + fontStyle;
					ctx.fillStyle = color;

					//Draw text in center
					ctx.fillText(txt, posX, posY);

					var posX = ((chart.chartArea.left + chart.chartArea.right) / 2);
					var posY = ((chart.chartArea.top + chart.chartArea.bottom) / 1.72);

					ctx.font = subFontSizeToUse + "px " + fontStyle;
					ctx.fillText(subtxt, posX, posY);
				}
			}
		});
	});
})(jQuery);