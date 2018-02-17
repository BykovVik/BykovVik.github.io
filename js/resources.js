Ball.resources = function(game) {
    
};
Ball.resources.prototype = {
  
    create: function() {
        this.add.sprite(0, 0, 'resources');
        this.loadButton = this.add.button(30, 270, 'exit', this.startLoad, this, 2, 0, 1);
        this.loadButton.anchor.set(0.5,0);
        this.loadButton.input.useHandCursor = true;
        this.bounceSound = this.game.add.audio('bounce');
    },
    startLoad: function() {
        this.bounceSound.play();
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('MainMenu');
    }
    
}