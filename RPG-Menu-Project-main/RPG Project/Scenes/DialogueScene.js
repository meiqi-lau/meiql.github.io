class DialogueScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    preload(){
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image('warrior', 'assets/images/warrior.png')
        this.load.image('arrowSilver', 'assets/images/arrowSilver_right.png')
        this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');

        //source: https://soundimage.org/looping-music/
        this.load.audio('bgmusic', 'assets/music/Quirky-Puzzle-Game-Menu.mp3');
    }

    create(){
        this.bgmusic = this.sound.add('bgmusic');
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.bgmusic.play(musicConfig);

        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;
        // sets class variable for image
        // this.add.image(0,0,"background");
        // position: the x and y coordinates
        // key: the key of the image in preload
        // let image = this.backgroundtest = this.add.image(0,0, "backgroundtest");

        // changes pivot of image to top left instead of center
        //this.backgroundtest.setOrigin(0,0);

        /*let backgroundtest = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "backgroundtest")
        let scaleX = this.cameras.main.width / backgroundtest.width
        let scaleY = this.cameras.main.height / backgroundtest.height
        let scale = Math.max(scaleX, scaleY)
        backgroundtest.setScale(scale).setScrollFactor(0)*/
        this.add.image(WIDTH/2,HEIGHT/2,"backgroundtest");
        this.add.image(WIDTH/2,HEIGHT/5*2,"warrior").setScale(3);
        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

        this.nextButton = this.add.image(1800,1000,"arrowSilver").setScale(2).setInteractive()
        
        this.nextButton.on('pointerdown', function (pointer) {
            this.scene.start("select the character");
        }.bind(this));

        createTextBox(this, 400, 700, {
            wrapWidth: 1000,
            fixedWidth: 1000,
            fixedHeight: 200,
        })
        .start(content1, 50);

    }

    update() {}
}


const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

// three line breaks indicates next slide
var content1 = 
`Hi! You look new.



I'm Shark by the way.



Shark from the Dynablaze guild!



What you never heard of the Dynablaze guild?



Well, we are a group of rag-tag adventurers who-



Oh no, I think a monster is approaching us.



Let's try to fight it off.
`

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
    var wrapWidth = GetValue(config, 'wrapWidth', 0);
    var fixedWidth = GetValue(config, 'fixedWidth', 0);
    var fixedHeight = GetValue(config, 'fixedHeight', 0);
    var textBox = scene.rexUI.add.textBox({
            x: x,
            y: y,
            background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
                .setStrokeStyle(2, COLOR_LIGHT),
            text: getBBcodeText(scene, wrapWidth, fixedWidth,fixedHeight),
            action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT).setVisible(false),
            space: {
                left: 80,
                right: 20,
                top: 40,
                bottom: 20,
                icon: 10,
                text: 10,
            }
        })
        .setOrigin(0)
        .layout();

    textBox  //set interactive to the text box
        .setInteractive()
        .on('pointerdown', function () {
            var icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true); // stop and show the all words
            } else {
                this.typeNextPage(); // just show the words of next page
            }
        }, textBox)
        .on('pageend', function () {
            if (textBox.isLastPage) {
                return
            }
            
            var icon = this.getElement('action').setVisible(true);
            this.resetChildVisibleState(icon);
            icon.y -= 30;
            var tween = scene.tweens.add({
                targets: icon,
                y: '+=30', // '+=100'
                ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 500,
                repeat: 0, // -1: infinity
                yoyo: false
            });
        }, textBox)

    return textBox;
}


var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,
        fontFamily: 'font1',
        fontSize: '35px',
        wrap: {
            //mode: 'word',
            width: wrapWidth
        },
        maxLines: 4,
    })
}







