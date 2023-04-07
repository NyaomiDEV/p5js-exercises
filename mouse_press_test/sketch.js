let q = 10;
let d;

function setup() {
	createCanvas(windowWidth, windowHeight);
	d = Math.min(width, height) / q;
	canvas.addEventListener('contextmenu', e => e.preventDefault());
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	d = Math.min(width, height) / q;
}

function draw(){
	background(0);

	for(let i = q; i > 0; i--){
		fill(map(i, 1, q, random(0, 20), random(200, 256)));
		ellipse(width/2, height/2, i*d);
	}
}

function mousePressed() {
	isLooping() ? noLoop() : loop();
}