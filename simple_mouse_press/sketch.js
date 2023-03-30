function setup() {
	createCanvas(windowWidth,windowHeight);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(21);
	if (mouseIsPressed) {
		fill(0);
		stroke(255);
		strokeWeight(5);
		noStroke();
		//background(255);
	} else {
		fill(255);
		stroke(200);
		strokeWeight(5);
		//background(0);
	}
	ellipse(windowWidth/2, windowHeight/2, 80, 80);
}
