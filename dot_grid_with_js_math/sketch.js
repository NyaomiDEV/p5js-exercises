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

	for(let w = 0; w <= width; w += grid){
		for(let h = 0; h <= height; h += grid){
			const d = Math.sqrt(
				Math.pow(mouseX - w, 2) + Math.pow(mouseY - h, 2)
			);
			const _mouseD = 1 - Math.min(1, d / (grid * 15));
			const _radius = maxRadius * Math.max(_mouseD, 0.1);
			ellipse(w, h, _radius);
		}
	}
}