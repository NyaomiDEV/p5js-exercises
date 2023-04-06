// number of fish
const fishNum = 100;

// maximum size
const maxWidth = 90;
const maxHeight = 20;

// pixels per second
const maxSpeed = 500;

const fish = [];

class Fish {
	x;
	y;
	z;
	width;
	height;
	speed;
	direction;
	color;

	constructor(x, y, z, width, height, speed, direction, color) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.direction = direction;
		this.color = color;
	}

	update() {
		this.x += this.speed / Math.max(getFrameRate(), getTargetFrameRate()) * this.direction;

		if (this.x > width || this.x < 0 - this.width) {
			this.x = this.direction > 0
				? this.width * -1
				: width;
			this.y = random(0, height - this.height);
		}
	}

	draw() {
		const deltaX = this.width / 3;
		const deltaY = this.height / 2;
		scoped(() => {
			fill(this.color);

			// verso dx
			if(this.direction > 0){
				triangle(
					this.x + deltaX, this.y + deltaY,
					this.x, this.y + 2 * deltaY,
					this.x, this.y
				);
				ellipse(
					this.x + deltaX,
					this.y,
					deltaX * 2,
					this.height
				);
				return;
			}

			// verso sx
			triangle(
				this.x + this.width - deltaX, this.y + deltaY,
				this.x + this.width, this.y + 2 * deltaY,
				this.x + this.width, this.y
			);
			ellipse(
				this.x,
				this.y,
				deltaX * 2,
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
	ellipseMode(CORNER);

	for(let i = 0; i < fishNum; i++){
		const z = random(0.05, 1);

		const _width = maxWidth * z;
		const _height = maxHeight * z;
		const speed = maxSpeed * z;
		const alpha = 127 * (1 - z);

		fish.push(
			new Fish(
				random(0, width - _width),
				random(0, height - _height),
				z,
				_width,
				_height,
				speed,
				Math.random() > 0.5 ? 1 : -1,
				color(random(0, 255), random(0, 255), random(0, 255), alpha)
			)
		);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0, 12, 21);

	for(const leFish of fish){
		leFish.update();
		leFish.draw();
	}
}