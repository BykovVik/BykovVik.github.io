Ball.level2 = function(game) { 
   
};

var ball;
var top;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var brickInfo2;
var scoreLvl2 = 0;
var scoreText;
var livesText;
var lifeLostText;
var playing = false;
var startButton;

Ball.level2.prototype = {
create: function() {
    music;

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.add.sprite(0, 0, 'fon_l_2');

    ball = this.add.sprite(this.world.width*0.5, this.world.height-45, 'ball');
    ball.anchor.set(0.5);
    this.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    this.physics.arcade.checkCollision.down = false;
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(this.ballLeaveScreen, this);
                    /*Потолок*/ 
    topLine = this.add.sprite(this.world.width*0, this.world.height-320,'top');
    this.physics.enable(topLine, Phaser.Physics.ARCADE);
    topLine.body.immovable = true;
                    /*препятствия*/
    platforms = this.add.group();
    platforms.enableBody = true;

    var border = platforms.create(320, 120, 'planka');
    border.body.immovable = true;
    border.scale.setTo(1, 1);

    border = platforms.create(0, 180, 'planka');
    border.body.immovable = true;
    border.scale.setTo(1, 1);
                    /*кнопка старт*/ 
    startButton = this.add.button(this.world.width*0.5, this.world.height*0.5, 'button-start', this.startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
                    /*отбойник*/ 
    paddle = this.add.sprite(this.world.width*0.5, this.world.height-5, 'paddle');
    this.physics.enable(paddle, Phaser.Physics.ARCADE); 
    paddle.anchor.set(0.5,1);
    paddle.body.immovable = true;
                   /*мишени*/               
    this.initBricks();
                   /*счёт игры*/ 
    scoreText = this.add.text(15, 7, 'Level 2', { font: '15px Arial', fill: 'white' });
                   /*счёт попыток*/ 
    livesText = this.add.text(this.world.width-15, 7, 'Lives: '+lives, { font: '15px Arial', fill: 'white' });
    livesText.anchor.set(1,0);
    lifeLostText = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'prob');    
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
                   /*музыка*/
    ball_hit = this.game.add.audio('ball_hit');
    brick_hit = this.game.add.audio('brick_hit');
    this.bounceSound = this.game.add.audio('bounce');
    
    if (music == true) {
        button_music = this.add.button(this.world.width*0.5, 15, 'button-music', this.button_musics, this, 1, 0, 2);
        button_music.anchor.set(0.5); 
    } else if (music == false) {
        button_music_non = this.add.button(this.world.width*0.5, 15, 'button-music-non', this.button_musics, this, 1, 0, 2);
        button_music_non.anchor.set(0.5); 
    };

},
update: function() {
    this.physics.arcade.collide(ball, platforms, this.ballHitPlatform);
    this.physics.arcade.collide(ball, topLine, this.ballHitTop);
    this.physics.arcade.collide(ball, bricks, this.ballHitBrick, null, this);
    this.physics.arcade.collide(ball, paddle, this.ballHitPaddle);
    if(playing) {
        paddle.x = this.input.x || this.world.width*0.5;
    }
    
    if(scoreLvl2 === 240) {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('level3');
        lives;
        playing = false;
    } 
},

initBricks: function() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 3,
            col: 5
        },
        offset: {
            top: 50,
            left: 30,
        },
        padding: 7
    };
    brickInfo2 = {
        width: 50,
        height: 20,
        count: {
            row: 3,
            col: 3
        },
        offset: {
            top: 50,
            left: 340,
        },
        padding: 7
    };
    bricks = this.add.group();
    for(c=0; c<brickInfo.count.col; c++) {
        for(r=0; r<brickInfo.count.row; r++) {
            var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
            var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;

            newBrick = this.add.sprite(brickX, brickY, 'bricks2');
            this.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    };
    for(c=0; c<brickInfo2.count.col; c++) {
        for(r=0; r<brickInfo2.count.row; r++) {
            var brickXcol2 = (r*(brickInfo.width+brickInfo.padding))+brickInfo2.offset.left;
            var brickYcol2 = (c*(brickInfo.height+brickInfo.padding))+brickInfo2.offset.top;

            newBrick = this.add.sprite(brickXcol2, brickYcol2, 'bricks2');
            this.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    };
},
ballHitBrick: function(ball, brick) {  
    brick.kill();

    scoreLvl2 += 10;
    scoreText.setText('Level 2');
    if (music) {
        brick_hit.play();
    }
},
ballLeaveScreen: function() {
    lives--;
    if(lives) {
        livesText.setText('Lives: '+lives);
        lifeLostText.visible = true;
        playing = false;
        ball.reset(this.world.width*0.5, this.world.height-55);
        paddle.reset(this.world.width*0.5, this.world.height-5);
        this.input.onDown.addOnce(function() {
            lifeLostText.visible = false;
            ball.body.velocity.set(250, -250);
            playing = true;
        }, this);
        }
        else {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.state.start('GameOver');
            scoreLvl2;
        }
    },
ballHitPaddle: function(ball, paddle) {
    if (playing) {
        ball.body.velocity.x = -2*3*(paddle.x-ball.x);
        ball.body.velocity.y = -2*3*(paddle.y-ball.y);
        }
    if (music) {
        ball_hit.play();
    }
    },
ballHitPlatform: function(ball, platforms) {
    if (music) {
        ball_hit.play();
    }
},
ballHitTop: function() {
    if (music) {
        ball_hit.play();
    }
},
button_musics: function() {
    if (music == true) {
            music = false;
            button_music.destroy(); 
            button_music_non = this.add.button(this.world.width*0.5, 15, 'button-music-non', this.button_musics, this, 1, 0, 2);
            button_music_non.anchor.set(0.5);         
    } else if (music == false) {
            music = true;
            button_music_non.destroy(); 
            button_music = this.add.button(this.world.width*0.5, 15, 'button-music', this.button_musics, this, 1, 0, 2);
            button_music.anchor.set(0.5);
         
    };
},
startGame: function() {
    this.bounceSound.play();
    startButton.destroy();
    ball.body.velocity.set(250, -250);
    ball.body.gravity.y = 100;
    playing = true;
    }
};