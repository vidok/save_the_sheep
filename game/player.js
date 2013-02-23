var Player = function() {
    this.points = 0;

    this.addPoints = function(point) {
        this.points += point;
    }

    this.getPoints = function() {
        return this.points;
    }
}