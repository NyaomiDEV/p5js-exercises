// raggio
const radius = 50;

// quanti pixel in un secondo?
const speed = 200;

let currentX = radius;
let xdir = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function getColorScaled(startRgb, endRgb, perc){
	return [
		startRgb[0] * (1 - perc) + endRgb[0] * perc,
		startRgb[1] * (1 - perc) + endRgb[1] * perc,
		startRgb[2] * (1 - perc) + endRgb[2] * perc,
	]
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentX += speedRate * xdir;

	if (currentX > (width - radius) || currentX < radius) {
		currentX = Math.min(Math.max(currentX, radius), width - radius);
		xdir *= -1;
	}

	fill(...getColorScaled([255,0,0], [0,0,255], currentX / (width - radius * 2)))
	background(255);
	ellipse(currentX, height / 2, radius * 2);
}