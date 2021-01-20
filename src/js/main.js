'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = (ctx.canvas.width = window.innerWidth);
var h = (ctx.canvas.height = window.innerHeight);
ctx.filter = 'blur(3px)';
var nt = 0;

window.onresize = function () {
	w = ctx.canvas.width = window.innerWidth;
	h = ctx.canvas.height = window.innerHeight;
	ctx.filter = 'blur(3px)';
};

function drawWave(n) {
	nt += 0.013;
	for (i = 0; i < n; i++) {
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.strokeStyle = 'hsla(' + (150 + 20 * i) + ',100%,60%,1)';
		for (x = 0; x < w; x++) {
			var y = noise.simplex3(x / 400, 0.3 * i, nt) * 150;
			ctx.lineTo(x, y + h / 2);
		}
		ctx.stroke();
		ctx.closePath();
	}
}

function render() {
	ctx.fillStyle = 'rgba(0,12,12,1)';
	ctx.fillRect(0, 0, w, h);
	drawWave(5);
	requestAnimationFrame(render);
}
render();
