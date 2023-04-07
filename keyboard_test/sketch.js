const r = 20;

let x, y;

const keyHandler = {
	"87-38": () => y-=5,
	"83-40": () => y+=5,
	"65-37": () => x-=5,
	"68-39": () => x+=5,
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width / 2;
	y = width / 2;
	fill(255);
	noStroke();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){

	for(const _keys in keyHandler){
		const keys = _keys.split("-").map(x => parseInt(x));
		for(const key of keys)
			if(keyIsDown(key))
				keyHandler[_keys]()
	}

	background(
		map(x, r, width - r, 0, 255),
		map(y, r, height - r, 0, 255),
		0
	);

	x = Math.max(r, Math.min(width - r, x));
	y = Math.max(r, Math.min(height- r, y));

	ellipse(x, y, r*2);
}
