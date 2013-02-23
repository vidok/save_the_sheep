var SheepGenerator = function(postion, increase) {

    this.createSheep = function(position, increase) {
        var default_pos = {x:20, y:300};
        var default_inc = 300;
        this.SoundClone = new buzz.sound("res/sound/Kozel_Clone.mp3");
        this.SoundClone.stop();
        this.SoundClone.play();
        return  new Sheep(position || default_pos, increase || default_inc);
    }

}