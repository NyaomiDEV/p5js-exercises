const dotsPerHeight = 10;
const dotsPerWidth = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//offscreen = createGraphics(windowWidth, windowHeight);
	noStroke();
	//offscreen.stroke(255);
	//offscreen.strokeWeight(0.5);
	colorMode(HSB);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	//offscreen.resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	//offscreen.clear();
	const s = Math.min(width / dotsPerWidth, height / dotsPerHeight);

	for(let w = s / 2; w < width; w += width / dotsPerWidth){
		for(let h = s / 2; h < height; h += height / dotsPerHeight){
			const d = dist(w, h, mouseX, mouseY);
			const _mouseD = map(d, 0, s * 8, 1, 0.1, true);
			const _radius = s * _mouseD;
			fill(lerpColor(color(300,100,100), color(180,100,100), _mouseD));
			ellipse(w, h, _radius);
			//offscreen.line(w, h, width/2, height/2);
		}
	}

	//image(offscreen, 0, 0);
}