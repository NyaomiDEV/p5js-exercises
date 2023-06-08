const frSize = 100;

let step = 0;
let d = 1;
let flag = false;

let xPos = 0, yPos = 0;

let mF = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	xPos = width / 2, yPos = height / 2;

	noStroke();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	// animazione
	if(step > 1 || step < 0){
		step = Math.min(Math.max(0, step), 1);
		d *= -1;
		if (step && xPos >= width / 4){
			flag = !flag;
		}
	}
	
	step += 0.01 * d;

	if(mF)
		xPos = mouseX, yPos = mouseY;

	// sfondo
	background(255, 210, 0);

	// frisbee
	if(!flag){
		fill(
			255, 0, 0
		);
		ellipse(
			xPos,
			yPos,
			frSize
		);
		fill(
			210, 0, 0
		);
		ellipse(
			xPos,
			yPos,
			frSize - 20
		);
	}

	// onda
	fill(
		0, 127, 255
	);
	rect(
		map(step, 0, 1, width, width / 4),
		0,
		(width / 4) * 3,
		height
	);
}

function mousePressed(){
	if (dist(xPos, yPos, mouseX, mouseY) <= frSize / 2){
		xPos = mouseX, yPos = mouseY;
		mF = true;
	}
}

function mouseReleased(){
	if (mF) mF = false;
}