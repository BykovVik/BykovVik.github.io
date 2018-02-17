Ball.GameOver = function(game) {
    
};
Ball.GameOver.prototype = {
  
    create: function() {
        this.add.sprite(0, 0, 'gameOver');
        this.loadButton = this.add.button(Ball._WIDTH*0.5, 270, 'button-load', this.startLoad, this, 2, 0, 1);
        this.loadButton.anchor.set(0.5,0);
        this.loadButton.input.useHandCursor = true;
        this.bounceSound = this.game.add.audio('bounce');

        if (scoreLvl2 != 0 & scoreLvl3 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239034,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if(scoreLvl3 != 0 & scoreLvl4 == 0) {
            VK.api("wall.post", {
            'message' : 'Классическая игра из детсва. Присоединяйтесь https://vk.com/app6282564_312892796', 
            'attachments' : 'photo-118208384_456239036,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);
            });
        } else if (scoreLvl4 != 0 & scoreLvl5 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239037,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl5 != 0 & scoreLvl6 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239038,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl6 != 0 & scoreLvl7 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239039,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl7 != 0 & scoreLvl8 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239040,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl8 != 0 & scoreLvl9 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239041,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl9 != 0 & scoreLvl10 == 0) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239042,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        } else if (scoreLvl10 != 0 & scoreLvl10 != 330) {
            VK.api("wall.post", {
            'attachments' : 'photo-118208384_456239043,https://vk.com/app6282564_312892796'
            
            }, function (data) {
                //alert("Post ID:" + data.response.post_id);

            });
        }

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