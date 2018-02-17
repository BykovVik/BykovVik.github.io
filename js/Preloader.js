Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
    preload: function() {
        this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT -100)*0.5, 'preloaderBg');
        this.preloadBar = this.add.sprite((Ball._WIDTH-130)*0.5, (Ball._HEIGHT -5)*0.5, 'preloaderBar');
        this.loadText = this.add.sprite((Ball._WIDTH-300)*0.5, (Ball._HEIGHT -300)*0.5, 'loadText');
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.image('ball', 'img/balls.png'); 
        this.load.image('paddle', 'img/paddle.png');
        this.load.image('planka', 'img/planka.png');
        this.load.image('planka2', 'img/planka2.png');
        this.load.image('planka3', 'img/planka3.png');
        this.load.image('planka3_l', 'img/planka3_l.png');
        this.load.image('paddle-vert', 'img/paddle-vert.png');
        this.load.image('paddle-vert_p_r', 'img/paddle-vert_p_r.png');
        this.load.image('paddle-vert_p_r_2', 'img/paddle-vert_p_r_2.png');
        this.load.image('paddle-vert_p_l', 'img/paddle-vert_p_l.png');
        this.load.image('paddle-vert_p_l_2', 'img/paddle-vert_p_l_2.png');
        this.load.image('paddle-vert2', 'img/paddle-vert2.png');
        this.load.image('paddle-vert2_p_r', 'img/paddle-vert2_p_r.png');
        this.load.image('paddle-vert2_p_l', 'img/paddle-vert2_p_l.png');
        this.load.image('paddle-vert2_top', 'img/paddle-vert2_top.png');
        this.load.image('rocks', 'img/rocks.png');
        this.load.image('rocks2', 'img/rocks2.png');
        this.load.image('bricks1', 'img/brick1.png');
        this.load.image('bricks2', 'img/brick2.png');
        this.load.image('bricks4', 'img/brick4.png');
        this.load.image('bricks5', 'img/brick5.png');
        this.load.image('bricks6', 'img/brick6.png');
        this.load.image('bricks7', 'img/brick7.png');
        this.load.image('bricks8', 'img/brick8.png');
        this.load.image('bricks9', 'img/brick9.png');
        this.load.image('bricks', 'img/brick.png');
        this.load.image('top', 'img/top_line.png');
        this.load.image('gameOver', 'img/game_over.png');
        this.load.image('finish', 'img/finish.png');
        this.load.image('about', 'img/about.png');
        this.load.image('resources', 'img/resources.png');
        this.load.image('exit', 'img/exit.png');
        this.load.image('fon_l_10', 'img/level_10_fon.png');
        this.load.image('fon_l_9', 'img/level_9_fon.png');
        this.load.image('fon_l_8', 'img/level_8_fon.png');
        this.load.image('fon_l_7', 'img/level_7_fon.png');
        this.load.image('fon_l_6', 'img/level_6_fon.png');
        this.load.image('fon_l_5', 'img/level_5_fon.png');
        this.load.image('fon_l_4', 'img/level_4_fon.png');
        this.load.image('fon_l_3', 'img/level_3_fon.png');
        this.load.image('fon_l_2', 'img/level_2_fon.png');
        this.load.image('fon_l_1', 'img/level_1_fon.png');
        this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
        this.load.image('pause', 'img/pause.png', 50, 50);
        this.load.image('pause_stop', 'img/pause_stop.png', 50, 50);
        this.load.image('button-music', 'img/music.png', 50, 50);
        this.load.image('button-music-non', 'img/music-non.png', 50, 50);
        this.load.image('button-start', 'img/button-start.png', 146, 51);
        this.load.image('button-load', 'img/button-load.png', 146, 51);
        this.load.image('button-about', 'img/button-about.png', 146, 51);
        this.load.image('button-res', 'img/button-res.png', 146, 51);
        this.load.image('prob', 'img/prob.png', 146, 51);
        this.load.audio('bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a', 'audio/bounce.wav']);
        this.load.audio('ball_hit', ['audio/ball-hit.ogg', 'audio/ball-hit.mp3', 'audio/ball-hit.m4a', 'audio/ball-hit.wav']);
        this.load.audio('brick_hit', ['audio/magic.ogg', 'audio/magic.mp3', 'audio/magic.m4a', 'audio/magic.wav']);
    },
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('MainMenu');
    }
};