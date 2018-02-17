Ball.MainMenu = function(game) {
 
};

Ball.MainMenu.prototype = {

    create: function() {
        this.add.sprite(0, 0, 'screen-mainmenu');
        this.startButton = this.add.button(Ball._WIDTH*0.5, 170, 'button-start', this.startGame, this, 2, 0, 1);
        this.startButton.anchor.set(0.5,0);
        this.startButton.input.useHandCursor = true;
        this.aboutButton = this.add.button(Ball._WIDTH*0.5, 220, 'button-about', this.startAbout, this, 2, 0, 1);
        this.aboutButton.anchor.set(0.5,0);
        this.aboutButton.input.useHandCursor = true;
        this.resButton = this.add.button(Ball._WIDTH*0.5, 270, 'button-res', this.startResources, this, 2, 0, 1);
        this.resButton.anchor.set(0.5,0);
        this.resButton.input.useHandCursor = true;
        this.startButton.input.useHandCursor = true;
        this.bounceSound = this.game.add.audio('bounce');
    },
    startGame: function() {
        this.bounceSound.play();
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Game');
    },
    startAbout: function() {
        this.bounceSound.play();
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('about');
    },
    startResources: function() {
        this.bounceSound.play();
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('resources');
    }
};