// raggio
const radius = 50;

// quanti pixel in un secondo?
const speed = 200;

// metà della massima apertura bocca
const maxArc = 60;

// velocità animazione bocca
const animSpeed = 24;

let currentX = radius;
let xdir = 1;
let bgColor;
let ribbonColor;

function scoped(f) {
	push();
	f();
	pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255, 255, 0);
	bgColor = color(random(0, 255), random(0, 255), random(0, 255));
	ribbonColor = color(random(0, 255), random(0, 255), random(0, 255));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentX += speedRate * xdir;

	if (currentX > (width - radius) || currentX < radius) {
		currentX = Math.min(Math.max(currentX, radius), width - radius);
		xdir *= -1;
		bgColor = color(random(0, 255), random(0, 255), random(0, 255));
	}

	background(bgColor);
	arc(currentX, height / 2, radius * 2, radius * 2, ...getRadiansByDirection(), PIE);

	scoped(() => {
		fill(0);
		ellipse(currentX - (xdir * -1) * radius / 4, height / 2 - radius / 2, 10);
	});

	ribbon(currentX, height / 2 - radius);
}

function getRadiansByDirection() {
	const scaleX = (currentX / (width - radius));
	const halfArc = maxArc / 2;
	const _arc = halfArc * Math.abs(scaleX * animSpeed % 2 - 1);

	if (xdir < 0)
		return [radians(180 + _arc), radians(360 + 180 - _arc)];
	
	return [radians(_arc), radians(360 - _arc)];
}

function ribbon(x, y) {
	const deltaX = 30;
	const deltaY = 10;

	scoped(() => {
		fill(ribbonColor);
		triangle(x, y, x - deltaX, y + deltaY, x - deltaX, y - deltaY);
		triangle(x, y, x + deltaX, y + deltaY, x + deltaX, y - deltaY);
	});
}