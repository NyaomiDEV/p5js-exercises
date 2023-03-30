const grid = 50;

const maxRadius = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);

	for(let w = 0; w <= width; w += 50){
		for(let h = 0; h <= height; h += 50){
			const d = dist(w, h, mouseX, mouseY);
			const _mouseD = map(d, 0, grid * 15, 1, 0.1, true);
			const _radius = maxRadius * _mouseD;
			ellipse(w, h, _radius);
		}
	}
}