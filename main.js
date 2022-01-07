const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//queue downloads
ASSET_MANAGER.queueDownload("./kirby_walk.png");
ASSET_MANAGER.queueDownload("./kirby_run2.png");
ASSET_MANAGER.queueDownload("./bronto_flip.png");
ASSET_MANAGER.queueDownload("./background.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	//make starting game entities here
	gameEngine.addEntity(new Kirby(gameEngine));
	gameEngine.addEntity(new Bronto(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));


	gameEngine.init(ctx);

	gameEngine.start();
});
