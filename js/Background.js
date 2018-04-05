function Background(game, img) {
    this.game = game;
    this.img = img;
    

}
Background.prototype.draw = function(){
    this.game.ctx.drawImage(
        this.img,
        0,
        0,
        this.game.canvas.width,
        this.game.canvas.height
    );
}