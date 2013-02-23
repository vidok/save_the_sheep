var Sheep = function(position, increase) {

    var inc = increase || 100;
    this.counter = 0;
    this.increase = Math.PI * 2 / inc;
    this.died = false;
    this.saved = false;

    this.sprite = new Sprite({
        "baseUrl"  : "res/sheep/"
        , "fps"    : 30
        , "frames" : ["sheep_01.png"]
    });


    this.die = function() {
        this.died = true;
    }

    this.isDied = function() {
        return this.died;
    }

    this.isSaved = function() {
        return this.saved;
    }

    this.save = function() {
        this.saved = true;
    }

    this.position = new Vec2(position.x, position.y);

    return this;
}