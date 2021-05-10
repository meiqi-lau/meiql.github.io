class ActionScene extends Phaser.Scene {
    constructor() {
        super("action");
    }

    init(data){
        console.log('init',data);
        this.imageID = data.id;
        this.imageFile = data.image;
    }
    preload(){
        this.load.image("nightMountain", "assets/images/night-mountain.png");
        this.load.image('pic'+ this.imageID, "assets/images/"+ this.imageFile);
        this.load.image('enemy', "assets/images/enemy.png");

        // source: https://soundimage.org/looping-music/
        this.load.audio('battlemusic', 'assets/music/Frantic-Gameplay_v001.mp3');
    }
    create(){
        this.battlemusic = this.sound.add('battlemusic');
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.battlemusic.play(musicConfig);

        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        //set some variables
        let currentEnemy = this.registry.values.basicEnemy;
        this.registry.set("currentEnemy", currentEnemy);
        this.registry.values.currentEnemy.accuracy = 1;
        this.registry.values.currentCharacter.accuracy = 1;

        this.registry.values.currentCharacter.ailment = "none";
        this.registry.values.currentCharacter.ailment = "none";

        this.scene.launch('UIScene') // Run UI Scene at the same time
        this.scene.launch('HealthBar') // Run UI Scene at the same time

        this.add.image(WIDTH/2,HEIGHT/2,"nightMountain")
        this.add.text(20, 20, "Take the Action", {font: "25px Arial", fill: "yellow"});
        //this.player = this.add.image(0,0,this.selectedCharacter).setScale(0.05)
        this.add.image(WIDTH/5,HEIGHT/5*2,'pic'+ this.imageID).setScale(2.5);
        this.add.image(WIDTH/5*4,HEIGHT/2,'enemy').setScale(2.5);

        this.TESTTEXT = this.add.text(0,0, "meow",{font: "100px Arial", fill: "brown"});

        this.scene.get('HealthBar').events.on("completedAttack", this.winlosecondition.bind(this));

    }

    winlosecondition(){
        let yourHealth = this.registry.values.currentCharacter.currentHealth;
        let enemyHealth = this.registry.values.currentEnemy.currentHealth;

        if (yourHealth == 0){
            this.events.emit("endMusic");
            this.battlemusic.stop();
            this.scene.sleep("UIScene");
            this.scene.sleep("HealthBar");
            this.scene.start("lose");
        }

        if (enemyHealth == 0){
            this.events.emit("endMusic");
            this.battlemusic.stop();
            this.scene.sleep("UIScene");
            this.scene.sleep("HealthBar");
            this.scene.start("win");
        }
    }

    update(){

    }
}







