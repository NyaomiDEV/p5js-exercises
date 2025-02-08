// raggio
const minRadius = 20;

// quanti pixel in un secondo?
const speed = 200;

let radius = minRadius, inout = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	stroke(255);
	strokeWeight(2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	radius += inout * (speed / Math.max(getFrameRate(), getTargetFrameRate()));

	if (radius >= Math.min(width / 2, height / 2) || radius <= minRadius){
		radius = Math.min(Math.min(width / 2, height / 2), Math.max(minRadius, radius));
		inout *= -1;
	}

	const colorStart = color(300, 100, 100);
	const colorEnd = color(180, 100, 100);

	const delta = map(radius, 20, Math.min(width / 2, height / 2), 0, 1, true);

	background(lerpColor(colorEnd, colorStart, delta));
	fill(lerpColor(colorStart, colorEnd, delta));
	ellipse(width / 2, height / 2, radius * 2);

	line(0, height / 2 - radius, width, height / 2 - radius);
	line(0, height / 2 + radius, width, height / 2 + radius);

	line(width / 2 - radius, 0, width / 2 - radius, height);
	line(width / 2 + radius, 0, width / 2 + radius, height);
}