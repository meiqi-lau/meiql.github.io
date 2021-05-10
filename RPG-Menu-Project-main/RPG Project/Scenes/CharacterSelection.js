var content2 = `Choose the character to start your adventure here!`

// content expandable

class CharacterSelection extends Phaser.Scene {
    constructor() {
        super("select the character");
    }
    preload(){
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image("castle", "assets/images/castle.png");
        this.load.image("character1", "assets/images/character_femaleAdventurer_idle.png");
        this.load.image("character2", "assets/images/warrior.png");
        this.load.image("character3", "assets/images/adventurer_idle.png")
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");          
    }
    create(){ 
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;
        //let backgroundtest = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "backgroundtest")
        //let scaleX = this.cameras.main.width / backgroundtest.width
        //let scaleY = this.cameras.main.height / backgroundtest.height
        //let scale = Math.max(scaleX, scaleY)
        //backgroundtest.setScale(scale).setScrollFactor(0)
        this.add.image(WIDTH/2,HEIGHT/2,"castle");
        this.add.text(20, 20, "Select the character", {font: "25px Arial", fill: "yellow"});

        //grab name
        let chara1name = this.registry.values.elda.name;
        let elda = this.registry.values.elda;
 

        //the first button
        this.add.image(WIDTH/4,HEIGHT/3,"character1").setScale(2)
        this.Button1 = this.add.sprite(WIDTH/4,HEIGHT/3*1.9,'yellowButton').setInteractive().setScale(1.2)
        this.Text1 = this.add.text(0,0, chara1name,{font: "32px Arial", fill: "brown"})
        centerButtonText(this.Text1, this.Button1)
        this.Button1.on('pointerdown', function (pointer) {
            this.sound.stopAll();
            
            this.registry.set("currentCharacter", elda);
            this.scene.start("action",{id:0, image:'character_femaleAdventurer_idle.png'})
        }.bind(this));
        
        //button event
        this.input.on('pointerover',function(event,gameObjects){gameObjects[0].setTexture('yellowButton1')});
        this.input.on('pointerout',function(event,gameObjects){gameObjects[0].setTexture('yellowButton')});
        
        //grab name
        let chara2name = this.registry.values.shark.name;
        let shark = this.registry.values.shark;


        //the second button
        this.add.image(WIDTH/2,HEIGHT/3,"character2").setScale(2)
        this.Button2 = this.add.sprite(WIDTH/2,HEIGHT/3*1.9,'yellowButton').setInteractive().setScale(1.2)
        this.Text2 = this.add.text(0,0, chara2name,{font: "32px Arial", fill: "brown"})
        centerButtonText(this.Text2, this.Button2)
        this.Button2.on('pointerdown', function (pointer) {
            this.sound.stopAll();
            this.registry.set("currentCharacter", shark);
            this.scene.start("action",{id:1, image:'warrior.png'})
        }.bind(this));

        //grab name
        let chara3name = this.registry.values.lucas.name;
        let lucas = this.registry.values.lucas;

        // the third button
        this.add.image(WIDTH/4*3,HEIGHT/3,"character3").setScale(2)
        this.Button3 = this.add.sprite(WIDTH/4*3,HEIGHT/3*1.9,'yellowButton').setInteractive().setScale(1.2)
        this.Text3 = this.add.text(0,0, chara3name,{font: "32px Arial", fill: "brown"})
        centerButtonText(this.Text3, this.Button3)
        this.Button3.on('pointerdown', function (pointer) {
            this.sound.stopAll();
            this.registry.set("currentCharacter", lucas);
            this.scene.start("action",{id:2, image:'adventurer_idle.png'})
        }.bind(this));

        //textBox here
        createTextBox(this, WIDTH/5,HEIGHT/4*3, {
            wrapWidth: WIDTH/2,
            fixedWidth: WIDTH/2,
            fixedHeight: 100,
        })
        .start(content2, 50);
    }
    update(){}
}

var centerButtonText = function(gameText, gameButton){
    Phaser.Display.Align.In.Center(
        gameText,
        gameButton
      );       
}

  