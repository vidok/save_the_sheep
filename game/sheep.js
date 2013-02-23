var Sheep = function(position, increase) {

    this.id = Math.random();
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

    this.angle = 70;
    this.radius = 45;
    this.velocity = 50;

    this.v0x = this.velocity * Math.cos(this.angle * Math.PI/180);
    this.v0y = this.velocity * Math.sin(this.angle * Math.PI/180);
    this.startX = this.position.x;
    this.startY = this.position.y;
    this.g = 9.8;
    this.tickcount = 0;

    this.move = function() {
        this.tickcount += 0.1;
        if(this.position.y < canvas.height - this.radius) {
            this.position.y = this.startY - ( this.v0y * this.tickcount - (0.5 * this.g * Math.pow(this.tickcount,2)));
        }
        this.position.x = this.startX + this.v0x * this.tickcount;
    }

    return this;
}