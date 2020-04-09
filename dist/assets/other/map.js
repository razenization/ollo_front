(function ($) {
	$(function () {
		var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		pos,
		size,
		degrees;
		
		function loadImgAndDraw(src, degrees, drawPos, drawSize){
			console.log('called img draw');
			let img = new Image();
			return new Promise((resolve, reject) => {
				img.onload = () => drawRotated(img, degrees, drawPos, drawSize);
				img.onerror = reject
				img.src = src
			})
		}

		function drawRotated(img, degrees, pos, size) {
			if (pos) {
				if (typeof pos['x'] === 'number' && typeof pos['y'] === 'number') {
					ctx.save();
					ctx.translate(canvas.width/2, canvas.height/2); 
					if (size) {
						if (size['w'] && size['h'] && (typeof size['w'] === 'number' && typeof size['h'] === 'number')) {
							img.width = size['w'];
							img.height = size['h'];
						}
					}
					ctx.translate(pos['x'], pos['y']); 
					ctx.translate(img.width/2, img.height/2); 
					ctx.rotate(degrees*Math.PI/180); 
					ctx.drawImage(img, -img.width/2, -img.height/2, img.width, img.height);
					ctx.translate(canvas.width/2, canvas.height/2); 
					ctx.restore();

					console.log('drawn');
				}
			}
		}
		// pos = {x: -canvas.width/2, y: -canvas.height/2};
		// size = {w: 20, h: 20};

		ctx.fillStyle = '#2B7BFB';
		ctx.strokeStyle = '#2B7BFB';

		// splitting map
		ctx.beginPath();
		ctx.moveTo(0, 50);
		ctx.bezierCurveTo(70, 50, 90, 70, canvas.width/2, canvas.height/2);
		ctx.lineTo(0, 50);
		ctx.moveTo(canvas.width/2, canvas.height/2);
		ctx.bezierCurveTo(canvas.width/2 + 20, canvas.height/2 + 30, canvas.width/2 + 60, canvas.height/2 - 30, canvas.width - 30, canvas.height - 30);
		ctx.lineTo(0, 50);
		ctx.moveTo(canvas.width - 30, canvas.height - 30);
		ctx.bezierCurveTo(canvas.width - 25, canvas.height - 20, canvas.width - 20, canvas.height - 5, canvas.width, canvas.height);
		ctx.lineTo(0, canvas.height);
		ctx.lineTo(0, 50);
		ctx.stroke();
		ctx.fill();

		// drawing buildings
		loadImgAndDraw("assets/img/dota-map/dire-ancient.svg", 0, {x: 90, y: -110});
		loadImgAndDraw("assets/img/dota-map/radiant-ancient.svg", 0, {x: -110, y: 95});

		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 45, {x: 60, y: -115}, {w: 12, h: 12});
		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 45, {x: 60, y: -100}, {w: 12, h: 12});
		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 0, {x: 68, y: -85}, {w: 12, h: 12});
		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", 0, {x: 78, y: -75}, {w: 12, h: 12});
		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", -45, {x: 93, y: -67}, {w: 12, h: 12});
		loadImgAndDraw("assets/img/dota-map/dire-barracks.svg", -45, {x: 108, y: -67}, {w: 12, h: 12});


	});
})(jQuery);