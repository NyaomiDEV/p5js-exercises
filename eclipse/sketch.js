// raggio
const radius = 50;

// quanti pixel in un secondo?
const speed = 200;

let xdir = -1;

let vmin;
let currentX;

function scoped(f){
	push();
	f();
	pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	vmin = Math.min(width, height);
	currentX = width + vmin / 2;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	vmin = Math.min(width, height);
}

function overlap(){
	return 1 - (Math.abs((width / 2) - currentX) / width);
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentX += speedRate * xdir;

	if (currentX <= (vmin / 2) * -1) {
		currentX = width + vmin / 2;
	}

	background(0);

	const _overlap = Math.max(
		0, 
		Math.min(
			1, 
			(overlap() * 8 - 6) / 2
		)
	);

	scoped(() => {
		fill(255);
		drawingContext.shadowBlur = 100 * _overlap;
		drawingContext.shadowColor = color(200 * _overlap);
		ellipse(width / 2, height / 2, vmin);
	});

	scoped(() => {
		fill(0);
		ellipse(currentX, height / 2, vmin);
	});
}