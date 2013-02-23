var Board = function(position) {
    //init board

    this.position = position || {x: canvas.width / 2, y: canvas.height - 200}


    this.img = new Image();
    this.img.src = 'res/board/board.png';

    return this;
}