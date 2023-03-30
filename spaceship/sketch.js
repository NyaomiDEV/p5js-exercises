// quanti pixel in un secondo (slow)?
const speed = 240;

let currentX;

const deltaX = 60;
const deltaY = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	currentX = 0;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function offsetTriangle(x, y, deltaX, deltaY) {
	return triangle(x, y, x - deltaX, y + deltaY, x - deltaX, y - deltaY);
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentX +=
		(
			currentX >= width / 2
			? speedRate * 2
			: speedRate
		);

	if (currentX >= width + deltaX) {
		currentX = 0;
	}

	background(
		currentX >= width / 2
			? color(0, 0, 0, 100)
			: color(0, 0, 0)
	);

	const _color = (currentX >= width / 2 ? color(255, 0, 0) : color(255));
	fill(_color);

	offsetTriangle(currentX, height / 2, deltaX, deltaY);
}