const divisions = 20;

function setup() {
	const _vmin = Math.min(windowWidth, windowHeight);
	createCanvas(_vmin, _vmin);
	colorMode(HSB);
}

function windowResized() {
	const _vmin = Math.min(windowWidth, windowHeight);
	resizeCanvas(_vmin, _vmin);
}

function draw(){
	background(0);

	for(let w = 0; w <= width; w += width / divisions){
		drawCustomLine(0, w, w, height);
		drawCustomLine(0, w, height - w, 0);
		drawCustomLine(w, 0, width, w);
		drawCustomLine(w, height, width, height - w);
		drawCustomLine(0, w, width, height - w);
	}
}

function drawCustomLine(x1, y1, x2, y2){
	const d = distance(mouseX, mouseY, x1, y1, x2, y2)
	const _mouseD = map(d, 0, (width / divisions) * 2, 1, 0.1, true);

	stroke(lerpColor(color(300, 100, 100), color(180, 100, 100), _mouseD));
	line(x1, y1, x2, y2);
}

function distance(x0, y0, x1, y1, x2, y2){
	return (
		Math.abs((x2 - x1) * (y1 - y0) - (x1 - x0) * (y2 - y1)) / 
		Math.sqrt(
			Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
		)
	);
}