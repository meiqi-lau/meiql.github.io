// name of class must match file name
class StartScene extends Phaser.Scene {
    // constructor function calls super(), which makes the class inherit 
    // all characteristics of predecessor Scene class
    // "bootGame" will be the identifier for the scene
    constructor() {
        super("startGame");
    }
    

    //preload function (puts all things like assets into memory)
    preload(){
        // this.load.image("key", "url");
        // key: a string to identify the image
        // url: a string path to the image file
        this.load.image("backgroundtest", "assets/images/backgroundtest.png");
        this.load.image("startButton", "assets/images/startButton.png");
        this.load.image("startButtonHover", "assets/images/startButtonHover.png");
        this.load.image("title","assets/images/title.png")

        // source: https://soundimage.org/looping-music/
        this.load.audio('menumusic', 'assets/music/Game-Menu_Looping.mp3');
    }

    // changeScene function
    changeScene() {
        //changes the scene
        this.sound.stopAll();
        this.scene.start("playGame");
    }

    // note all scenes are controlled by init() preload() create() and update()
    create() {
        this.scene.launch('characterDataLoader');

        this.menumusic = this.sound.add('menumusic');
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.menumusic.play(musicConfig);

        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        this.add.image(WIDTH/2,HEIGHT/2,"backgroundtest");
        this.add.image(WIDTH/2,HEIGHT/5*2,"title");
        this.add.text(20, 20, "start scene", {font: "25px Arial", fill: "yellow"});
    

        // make button, setInteractive
        this.startButton = this.add.image(WIDTH/2, HEIGHT/5*3, "startButton").setInteractive().setScale(0.5);
        // clicking startButton will change scene
        this.input.on('gameobjectdown', this.changeScene, this);

        // button hover, colors
        /*startButton.on('pointerover', function (pointer) {
            //this.setTint(0xff0000);
            startButton.setFrame(1);
            this.scene.start("playGame");
        });
    
        startButton.on('pointerout', function (pointer) {
            this.clearTint();
        });
    
        startButton.on('pointerup', function (pointer) {
            this.clearTint();
        }); */
    
        //Button hover
        this.startButton.on('pointerdown', function (pointer) {
            this.scene.start("playGame")
        }.bind(this));
        
        this.input.on('pointerover',function(event,gameObjects){
            gameObjects[0].setTexture('startButtonHover')
        })
        this.input.on('pointerout',function(event,gameObjects){
            gameObjects[0].setTexture('startButton')
        })
        this.input.on('pointerup', function (event,gameObjects) {
            gameObjects[0].setTexture('startButtonHover')
        })
       
    }

    update(){}

}
