let currentX, currentY;
let xdir = 1, ydir = 1;
let img;

const __w = 200;
let __h;
let _color;

// quanti pixel in un secondo?
const speed = 300;

function colorRand(){
	return color(
		Math.random() * 256,
		Math.random() * 256,
		Math.random() * 256
	)
}

function preload() {
	img = loadImage("logo.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	__h = (img.height * __w) / img.width;

	currentX = Math.random() * width;
	currentY = Math.random() * height;

	_color = colorRand();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	const speedRate = speed / Math.max(getFrameRate(), getTargetFrameRate());
	currentX += speedRate * xdir;
	currentY += speedRate * ydir;

	if(currentX > (width - __w/2) || currentX < __w/2){
		currentX = Math.min(Math.max(currentX, __w/2), width - __w/2);
		_color = colorRand();
		xdir *= -1;
	}

	if(currentY > (height - __h/2) || currentY < __h/2){
		currentY = Math.min(Math.max(currentY, __h/2), height - __h/2);
		_color = colorRand();
		ydir *= -1;
	}

	background(0);

	tint(_color);
	image(img, currentX - __w / 2, currentY - __h / 2, __w, __h);
}