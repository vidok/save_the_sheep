var Sheep = function(position, increase) {

    var inc = increase || 100;
    this.counter = 0;
    this.increase = Math.PI * 2 / inc;

    this.sprite = new Sprite({
        "baseUrl"  : "res/sheep/"
        , "fps"    : 30
        , "frames" : ["sheep_01.png"]
    });

    this.position = new Vec2(position.x, position.y);

    return this;
}