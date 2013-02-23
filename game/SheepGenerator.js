var SheepGenerator = function(postion, increase) {

    this.createSheep = function(position, increase) {
        var default_pos = {x:Math.random() * 100, y: Math.random() * 100};
        var default_inc = 300;
        return  new Sheep(position || default_inc, increase || default_inc);
    }

}