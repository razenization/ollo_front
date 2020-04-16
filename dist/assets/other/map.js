(function ($) {
	$(function () {
		var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		pos,
		size,
		degrees,
		direColor = '#3D4274',
		radiantColor = '#E74C3C';

		// Version below is the one that was used for an older map design.
		
		// function loadImgAndDraw(src, degrees, drawPos, drawSize){
		// 	console.log('called img draw');
		// 	let img = new Image();
		// 	return new Promise((resolve, reject) => {
		// 		img.onload = () => drawRotated(img, degrees, drawPos, drawSize);
		// 		img.onerror = reject
		// 		img.src = src
		// 	})
		// }

		// function drawRotated(img, degrees, pos, size) {
		// 	if (pos) {
		// 		if (typeof pos['x'] === 'number' && typeof pos['y'] === 'number') {
		// 			ctx.save();
		// 			ctx.translate(canvas.width/2, canvas.height/2); 
		// 			if (size) {
		// 				if (size['w'] && size['h'] && (typeof size['w'] === 'number' && typeof size['h'] === 'number')) {
		// 					img.width = size['w'];
		// 					img.height = size['h'];
		// 				}
		// 			}
		// 			ctx.translate(pos['x'], pos['y']); 
		// 			ctx.translate(img.width/2, img.height/2); 
		// 			ctx.rotate(degrees*Math.PI/180); 
		// 			ctx.drawImage(img, -img.width/2, -img.height/2, img.width, img.height);
		// 			ctx.translate(canvas.width/2, canvas.height/2); 
		// 			ctx.restore();

		// 			console.log('drawn');
		// 		}
		// 	}
		// }
		// pos = {x: -canvas.width/2, y: -canvas.height/2};
		// size = {w: 20, h: 20};

		// ctx.fillStyle = '#2B7BFB';
		// ctx.strokeStyle = '#2B7BFB';

		// splitting map
		// ctx.beginPath();
		// ctx.moveTo(0, 50);
		// ctx.bezierCurveTo(70, 50, 90, 70, canvas.width/2, canvas.height/2);
		// ctx.lineTo(0, 50);
		// ctx.moveTo(canvas.width/2, canvas.height/2);
		// ctx.bezierCurveTo(canvas.width/2 + 20, canvas.height/2 + 30, canvas.width/2 + 60, canvas.height/2 - 30, canvas.width - 30, canvas.height - 30);
		// ctx.lineTo(0, 50);
		// ctx.moveTo(canvas.width - 30, canvas.height - 30);
		// ctx.bezierCurveTo(canvas.width - 25, canvas.height - 20, canvas.width - 20, canvas.height - 5, canvas.width, canvas.height);
		// ctx.lineTo(0, canvas.height);
		// ctx.lineTo(0, 50);
		// ctx.stroke();
		// ctx.fill();

		// drawing buildings
		// loadImgAndDraw("assets/img/dota-map/dire-ancient.svg", 0, {x: 90, y: -110});
		// loadImgAndDraw("assets/img/dota-map/radiant-ancient.svg", 0, {x: -110, y: 95});

		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 45, {x: 60, y: -115}, {w: 12, h: 12});
		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 45, {x: 60, y: -100}, {w: 12, h: 12});
		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 0, {x: 68, y: -85}, {w: 12, h: 12});
		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 0, {x: 78, y: -75}, {w: 12, h: 12});
		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", -45, {x: 93, y: -67}, {w: 12, h: 12});
		// loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", -45, {x: 108, y: -67}, {w: 12, h: 12});

		// End of deprecated version.

		function drawCircle(x, y, size) {
			ctx.beginPath();
			(size === 'large') ? ctx.arc(x, y, 15, 2 * Math.PI, false) : (size === 'medium') ? ctx.arc(x, y, 7, 2 * Math.PI, false) : (size === 'small') ? ctx.arc(x, y, 3.5, 2 * Math.PI, false) : null;
			ctx.stroke();
			ctx.fill();
		}

		function drawLine(fromX, fromY, toX, toY) {
			let initialStroke = ctx.strokeStyle;
			ctx.strokeStyle = '#C4C4C4';
			ctx.beginPath();
			ctx.moveTo(fromX, fromY);
			ctx.lineTo(toX, toY);
			ctx.stroke();
			ctx.strokeStyle = initialStroke;
		}

		// Dire buildings

		ctx.fillStyle = direColor;
		ctx.strokeStyle = direColor;

		drawCircle(225, 25, 'large');			// Dire anc

		drawCircle(201, 32, 'medium');			// Dire top t4
		drawCircle(217, 48.5, 'medium');		// Dire bottom t4

		// Dire mid

		drawCircle(200, 59, 'small');			// Dire mid left barrack
		drawCircle(191, 50, 'small');			// Dire mid right barrack
		drawCircle(187, 63, 'medium');			// Dire mid t3

		drawLine(178, 72, 167, 83);
		drawCircle(160, 90, 'medium');			// Dire mid t2

		drawLine(151, 99, 140, 110);
		drawCircle(131, 119, 'medium');			// Dire mid t1

		// Dire top

		drawCircle(175, 30, 'small');			// Dire top left barrack
		drawCircle(175, 18, 'small');			// Dire top right barrack
		drawCircle(162, 24, 'medium');			// Dire top t3

		drawLine(150, 24, 125, 24);
		drawCircle(113, 24, 'medium');			// Dire top t2

		drawLine(101, 24, 76, 24);
		drawCircle(64, 24, 'medium');			// Dire top t1

		// Dire bottom

		drawCircle(220, 70, 'small');			// Dire bottom left barrack
		drawCircle(232, 70, 'small');			// Dire bottom right barrack
		drawCircle(226, 83, 'medium');			// Dire bottom t3

		drawLine(226, 95, 226, 120);
		drawCircle(226, 132, 'medium');			// Dire bottom t2

		drawLine(226, 144, 226, 169);
		drawCircle(226, 181, 'medium');			// Dire bottom t1



		// Radiant buildings

		ctx.fillStyle = radiantColor;
		ctx.strokeStyle = radiantColor;


		drawCircle(25, 225, 'large');			// Radiant anc

		drawCircle(32, 201, 'medium');			// Radiant top t4
		drawCircle(48.5, 217, 'medium');		// Radiant bottom t4

		// Radiant mid

		drawCircle(59, 200, 'small');			// Radiant mid left barrack
		drawCircle(50, 191, 'small');			// Radiant mid right barrack
		drawCircle(63, 187, 'medium');			// Radiant mid t3

		drawLine(72, 178, 83, 167);
		drawCircle(90, 160, 'medium');			// Radiant mid t2

		drawLine(99, 151, 110, 140);
		drawCircle(119, 131, 'medium');			// Radiant mid t1

		// Radiant top

		drawCircle(30, 175, 'small');			// Radiant top left barrack
		drawCircle(18, 175, 'small');			// Radiant top right barrack
		drawCircle(24, 162, 'medium');			// Radiant top t3

		drawLine(24, 150, 24, 125);
		drawCircle(24, 113, 'medium');			// Radiant top t2

		drawLine(24, 101, 24, 76);
		drawCircle(24, 64, 'medium');			// Radiant top t1

		// Radiant bottom

		drawCircle(70, 220, 'small');			// Radiant bottom left barrack
		drawCircle(70, 232, 'small');			// Radiant bottom right barrack
		drawCircle(83, 226, 'medium');			// Radiant bottom t3

		drawLine(95, 226, 120, 226);
		drawCircle(132, 226, 'medium');			// Radiant bottom t2

		drawLine(144, 226, 169, 226);
		drawCircle(181, 226, 'medium');			// Radiant bottom t1


	});
})(jQuery);