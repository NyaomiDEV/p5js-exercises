function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	
	drawStuff();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

	drawStuff();
}

function drawStuff(){
	const squareLength = Math.min(width, height);
	const startingX = Math.max((width - squareLength) / 2, 0);
	const startingY = Math.max((height - squareLength) / 2, 0);

	background(255);

	fill(0, 255, 0);
	rect(startingX, startingY, squareLength / 2, squareLength / 2);
	
	fill(255, 0, 255);
	ellipse(startingX + squareLength / 4 * 3, startingY + squareLength / 4, squareLength / 2, squareLength / 2);
	
	fill(255, 165, 0);
	rect(startingX, startingY + squareLength / 2, squareLength, squareLength / 2);
}