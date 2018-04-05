function Points(game) {

    this.game = game;

    this.x = this.game.canvas.width * 0.02;
    this.y = this.game.canvas.height * 0.05;
    this.point = 50;
}
Points.prototype.draw = function() {
    this.game.ctx.font = "2em Verdana";
    this.game.ctx.fillStyle = "White";
    this.game.ctx.fillText(this.point, this.x, this.y);
}
Points.prototype.add = function() {

    this.point += 10;
}