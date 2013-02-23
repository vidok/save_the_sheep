var Lava = function(position, options) {
    this.dangerHeigth = options.dangerHeigth;
    this.position = position;

    this.img = new Image();
    this.img.src = 'res/lava.png';

    this.inLava = function(x, y) {
        return (y >= this.dangerHeigth);
    }

    return this;

}