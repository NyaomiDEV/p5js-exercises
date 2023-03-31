// number of balls
const ballsNum = 500;

// maximum radius
const maxRadius = 100;

// pixels per second
const maxSpeed = 500;

const balls = [];

class Ball {
	x;
	y;
	z;
	width;
	height;
	speed;
	color;

	constructor(x, y, z, width, height, speed, color) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.color = color;
	}

	update() {
		this.y += this.speed / Math.max(getFrameRate(), getTargetFrameRate());

		if (this.y >= height) {
			this.y = 0 - this.height;
			this.x = random(-this.width / 2, width);
		}
	}

	draw() {
		scoped(() => {
			// ball
			fill(this.color);
			ellipse(
				this.x,
				this.y,
				this.width,
				this.height
			);
		});
	}
}

function scoped(f){
	push();
	f();
	pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(0);
	ellipseMode(CORNER);

	for(let i = 0; i < ballsNum; i++){
		const z = random(0.05, 1);

		const radius = maxRadius * z;
		const speed = maxSpeed * z;
		const alpha = 127 * (1 - z);

		balls.push(
			new Ball(
				random(-radius, width),
				random(-radius, height),
				z,
				radius * 2,
				radius * 2,
				speed,
				color(random(0, 255), random(0, 255), random(0, 255), alpha)
			)
		);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0, 0, 0, 20);

	for(const ball of balls){
		ball.update();
		ball.draw();
	}
}