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
    this.SoundAmbient = new buzz.sound("res/sound.ogg");
    this.SoundAmbient.loop().play();

    // set up creature
    this.creatureImg = new Image();
    this.creatureImg.src = 'res/sheep/sheep_01.png';

    this.creaturePos = new Vec2(canvas.width / 2, canvas.height / 2);

    this.countSheeps = 2;
    this.sheeps = [];

    for (var i = 0; i < this.countSheeps; i++) {
       this.sheeps[i] = new Sheep({x:Math.random() * 100, y: Math.random() * 100});
    }

    this.counter = 0;
    this.increase = Math.PI * 2 / 300;

}

Game.prototype.Calculate = function () {
    for (var i = 0; i < this.countSheeps; i++) {
        this.sheeps[i].position.y += Math.sin(this.counter) * 5;
        this.sheeps[i].position.x += tickperframe / 10;
        if (this.sheeps[i].position.y > canvas.height) this.sheeps[i].position.y = 0;
        if (this.sheeps[i].position.x > canvas.width) this.sheeps[i].position.x = 0;

        this.sheeps[i].sprite.update(tickperframe);
    }
    this.counter += this.increase;
}


Game.prototype.Render = function () {
    
    ctx.drawImage(this.creatureImg, 0, 0, 128, 128, this.creaturePos.x, this.creaturePos.y, 128, 128);

    for (var i = 0; i < this.countSheeps; i++) {
        this.sheeps[i].sprite.draw(this.sheeps[i].position.x, this.sheeps[i].position.y);
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

    // e.whitch contains charcode of pressed key

    // left
    if (e.which == 37) this.creaturePos.x -= 10;
    // right
    if (e.which == 39) this.creaturePos.x += 10;
    // up
    if (e.which == 38) this.creaturePos.y -= 10;
    // down
    if (e.which == 40) this.creaturePos.y += 10;

    this.SoundJump.stop();
    this.SoundJump.play();
}

Game.prototype.onkeypress = function (e) {


}
   
Game.prototype.onkeyup = function (e) {

}




