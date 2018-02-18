Ball.GameOver = function(game) {
    
};
Ball.GameOver.prototype = {
  
    create: function() {
        this.add.sprite(0, 0, 'gameOver');
        this.loadButton = this.add.button(Ball._WIDTH*0.5, 270, 'button-load', this.startLoad, this, 2, 0, 1);
        this.loadButton.anchor.set(0.5,0);
        this.loadButton.input.useHandCursor = true;
        this.bounceSound = this.game.add.audio('bounce');
    },
    startLoad: function() {
        this.bounceSound.play();
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Game');
        score = 0;
        scoreLvl2 = 0;
        scoreLvl3 = 0;
        scoreLvl4 = 0;
        scoreLvl5 = 0;
        scoreLvl6 = 0;
        scoreLvl7 = 0;
        scoreLvl8 = 0;
        scoreLvl9 = 0;
        scoreLvl10 = 0;
        lives = 5;
        music = true;
    }
    
}
