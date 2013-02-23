//-------------------------------------------------------
// Base class for the game object
//-------------------------------------------------------


Game = function () {

}

Game.prototype.Load = function () {

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

    this.lavaImg = new Image();
    this.lavaImg.src = 'res/lava.png';
    
    this.creaturePos = new Vec2(canvas.width / 2, canvas.height / 2);

    this.countSheeps = 5;
    this.sheeps = [];

    for (var i = 0; i < this.countSheeps; i++) {
       this.sheeps[i] = new Sheep({x:Math.random() * 100, y: Math.random() * 100}, 300);
    }

    this.boardImg = new Board({x: canvas.width / 2, y: canvas.height - 200});

    this.lavaHeight = canvas.height - 125;

    this.maxDiedSheeps = 3;
    this.currentDiedSheeps = 0;

}

Game.prototype.Calculate = function () {
    for (var sheep_id in this.sheeps) {

        var sheep = this.sheeps[sheep_id];

        if (sheep.position.x <120) {
          sheep.position.x += 1;
          sheep.position.y = 200;
        }
     if (sheep.position.x > 120){
           sheep.position.y += Math.sin(sheep.counter) * 5;
            sheep.position.x += tickperframe / 10;
        }

    if (sheep.position.x > 685){
        sheep.position.x += 1;
        sheep.position.y = 200;
        }

        if (sheep.position.y >= this.lavaHeight) {
            sheep.die();
        }

        if (sheep.isDied() || sheep.isSaved()) {
            delete this.sheeps[sheep_id];
            this.currentDiedSheeps += 1;

            if (this.currentDiedSheeps >= this.maxDiedSheeps) {
                this.lose();
            }
        }

        sheep.position.y += Math.sin(sheep.counter) * 5;
        sheep.position.x += tickperframe / 10;
        if (sheep.position.x > canvas.width) sheep.position.x = 0;

        sheep.counter += sheep.increase;
        sheep.sprite.update(tickperframe);
    }

    ctx.drawImage(this.boardImg.img, this.boardImg.position.x, this.boardImg.position.y);
}


Game.prototype.lose = function() {
    alert("you lose");
};


Game.prototype.Render = function () {
    
    ctx.drawImage(this.creatureImg, 0, 0, 128, 128, this.creaturePos.x, this.creaturePos.y, 128, 128);
    ctx.drawImage(this.boardImg.img, this.boardImg.position.x, this.boardImg.position.y);
    ctx.drawImage(this.rockRightImg, 700, 300);
    ctx.drawImage(this.rockLeftImg, 0, 300);
    ctx.drawImage(this.lavaImg, 125, 475);

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




