var SheepGenerator = function(postion, increase) {

    this.createSheep = function(position, increase) {
        var default_pos = {x:20, y:300};
        var default_inc = 300;
        return  new Sheep(position || default_pos, increase || default_inc);
    }

}