// raggio
const radius = 50;

// quanti pixel in un secondo?
const speed = 600;

let currentX = radius;
let xdir = 1;

let currentY = radius;
let ydir = 1;

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

	currentY += speedRate * ydir;

	if (currentY > (height - radius) || currentY < radius) {
		currentY = Math.min(Math.max(currentY, radius), height - radius);
		ydir *= -1;
	}

	const scaleX = (currentX / (width - radius * 2));
	const scaleY = (currentY / (height - radius * 2));
	fill(...getColorScaled([255, 255, 255], [0, 0, 0], scaleY * 4 - 2));
	background(...getColorScaled([0, 0, 0], [255, 255, 0], scaleY * 4 - 2));
	ellipse(width / 2, currentY, radius * 2);

	fill(...getColorScaled([255, 0, 0], [0, 0, 255], scaleX));
	ellipse(currentX, height / 2, radius * 2);
}