class Kirby {
	constructor(game) {
		this.game = game;
		//{spritesheet, xStart, yStart, width, height, frameCount, frameDuration}
		//starts with a walking animation
		this.animator = new Animator(ASSET_MANAGER.getAsset("./kirby_walk.png"), 1.01, 0, 23, 24, 10, 0.1);

		//variables to adjust position and movement speed
		this.speed = 150;
		this.x = -48;
		this.y = 0;
		this.run = false;
		
	};

	update() {
		//make it move forward
		this.x += this.speed*this.game.clockTick;

		//start running after going one quarter the screen
		if(this.run == false && this.x > 348) {
			this.setRun();
		}
		
		//slowly increment the speed as kirby runs
		if(this.run) {
			this.speed += 1.5;
		}

		//reset loop
		if(this.x > 2048) {
			this.x = -96;
			this.setWalk();
		}
	};

	setRun() {
		this.animator = new Animator(ASSET_MANAGER.getAsset("./kirby_run2.png"), 3, 0, 25, 26, 8, 0.1);
		//this.speed = 250;
		this.run = true;
	};

	setWalk() {
		this.animator = new Animator(ASSET_MANAGER.getAsset("./kirby_walk.png"), 1.01, 0, 23, 24, 10, 0.1);
		this.speed = 150;
		this.run = false;
	};




	draw(ctx) {
		//draw the full spreadsheet
		//ctx.drawImage(ASSET_MANAGER.getAsset("./kirby_walk.png"), 0, 50);

		//call animator to draw it
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, 490, 5);
	};
}