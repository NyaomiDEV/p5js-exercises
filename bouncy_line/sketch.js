// quanti pixel in un secondo?
const speed = 200;

let currentY = 1;
let ydir = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(255);
	fill(200);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);

	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentY += speedRate * ydir;

	if (currentY >= height || currentY < 1) {
		currentY = Math.min(Math.max(currentY, 1), height - 1);
		ydir *= -1;
	}

	line(width/2, 0, width/2, currentY);
}