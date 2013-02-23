var Sheep = function(position) {

    this.sprite = new Sprite({
        "baseUrl"  : "res/sheep/"
        , "fps"    : 30
        , "frames" : ["sheep_01.png"]
    });

    this.position = new Vec2(position.x, position.y);

    return this;
}