const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//queue downloads
//spritesheets
ASSET_MANAGER.queueDownload("./kirby_walk.png");
ASSET_MANAGER.queueDownload("./kirby_run2.png");
ASSET_MANAGER.queueDownload("./bronto_flip.png");
ASSET_MANAGER.queueDownload("./background.png");

//music
ASSET_MANAGER.queueDownload("./music.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	//play some music
	ASSET_MANAGER.autoRepeat("./music.mp3");
	

	//make starting game entities here
	gameEngine.addEntity(new Kirby(gameEngine));
	gameEngine.addEntity(new Bronto(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));


	gameEngine.init(ctx);

	gameEngine.start();
});
