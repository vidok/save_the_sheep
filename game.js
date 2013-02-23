//-------------------------------------------------------
// Base class for the game object
//-------------------------------------------------------


Game = function () {

}

Game.prototype.Load = function () {

    this.player = new Player();

    // load sound
    this.SoundJump = new buzz.sound("res/jump.ogg");
    this.SoundJump.play();

    // load ambient music and play it
    // this.SoundAmbient = new buzz.sound("res/sound.ogg");
    // this.SoundAmbient.loop().play();

    // set up creature
    this.creatureImg = new Image();
    this.creatureImg.src = 'res/sheep/sheep_01.png';


    this.rockLeftImg = new Image();
    this.rockLeftImg.src = 'res/rockLeft.png';

    this.rockRightImg = new Image();
    this.rockRightImg.src = 'res/rockRight.png';

    this.lava = new Lava({x: 125, y: 475}, {dangerHeigth: canvas.height - 125});
    
    this.creaturePos = new Vec2(canvas.width / 2, canvas.height / 2);

    this.countSheeps = 1;
    this.sheeps = [];

    this.sheepGenerator = new SheepGenerator();

//    for (var i = 0; i < this.countSheeps; i++) {
       this.sheeps.push(this.sheepGenerator.createSheep());
//    }

    this.boardImg = new Board({x: canvas.width / 2, y: canvas.height - 200});

    this.maxDiedSheeps = 3;
    this.currentDiedSheeps = 0;

    this.savedPlace = {x: canvas.width - 125, y: canvas.height - 215};
}

Game.prototype.Calculate = function () {
    for (var sheep_id in this.sheeps) {

        var sheep = this.sheeps[sheep_id];
        sheep.move();


        console.log(sheep.position.x, sheep.position.y);
        if (this.lava.inLava(sheep.position.x, sheep.position.y)) {
            sheep.die();
        }
        if (sheep.isDied() || sheep.isSaved()) {
            delete this.sheeps[sheep_id];
            this.currentDiedSheeps += 1;
            this.sheeps.push(this.sheepGenerator.createSheep());

//            if (this.currentDiedSheeps >= this.maxDiedSheeps) {
//                this.lose();
//            }
        }

        if (!sheep.isDied()) {
            sheep.sprite.update(tickperframe);
        }
    }

    ctx.drawImage(this.boardImg.img, this.boardImg.position.x, this.boardImg.position.y);
}


Game.prototype.lose = function() {
    GameLoopManager.stop();
};


Game.prototype.Render = function () {
    
    ctx.drawImage(this.creatureImg, 0, 0, 128, 128, this.creaturePos.x, this.creaturePos.y, 128, 128);
    ctx.drawImage(this.boardImg.img, this.boardImg.position.x, this.boardImg.position.y);
    ctx.drawImage(this.rockRightImg, 657, 372);
    ctx.drawImage(this.rockLeftImg, 1, 372);
    ctx.drawImage(this.lava.img, this.lava.position.x, this.lava.position.y);

    for (var sheep_id in this.sheeps) {
        var sheep = this.sheeps[sheep_id];
        sheep.sprite.draw(sheep.position.x, sheep.position.y);
    }
}

//---------------------------------------------
// mouse input

Game.prototype.onmousedown = function (e) {

    // get pos from event e
    this.creaturePos.x = e.layerX;
    this.creaturePos.y = e.layerY;

    // play sound
    this.SoundJump.stop();
    this.SoundJump.play();

}
Game.prototype.onmousemove = function (e) {
}
Game.prototype.onmouseup = function (e) {
}

//---------------------------------------------
// keyboard input

Game.prototype.onkeydown = function (e) {
    if (e.keyCode == 39) {
         if ( this.boardImg.position.x < 559 ){
            this.boardImg.position.x += 100;
         }
    }
    else if (e.keyCode == 37) {
        if ( this.boardImg.position.x > 101 ){
        this.boardImg.position.x -= 100;
        }
    }
}

Game.prototype.onkeypress = function (e) {


}
   
Game.prototype.onkeyup = function (e) {

}




