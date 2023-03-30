// quanti pixel in un secondo?
const speed = 200;

let currentY = 1;
let xdir = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);
	fill(200);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentY += speedRate * xdir;

	if (currentY >= width || currentY < 1) {
		currentY = Math.min(Math.max(currentY, 1), width - 1);
		xdir *= -1;
	}

	blendMode(MULTIPLY);
	rect(0,0,width,height);
	blendMode(BLEND);
	line(width/2, 0, currentY, height);
}