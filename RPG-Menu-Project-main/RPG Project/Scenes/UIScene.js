//import {playerData, shark, getMoveByName} from '../playerData.js';


// TESTING AREA
//console.log(getMoveByName(playerData.currentCharacter.moveset, "Basic Attack"));
//console.log(getMoveByName(playerData.currentCharacter.moveset, "Basic Attack").description);
//


var battleSelectionDialogue = "Choose an an action!";
var attackDescription1 = "add descriptions here(attack 1)";
var attackDescription2 = "add descriptions here(attack 2)";
var attackDescription3 = "add descriptions here(attack 3)";
var placeholderDialogue = `test 



1



2



3



test`;


class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    preload(){
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });   

        //this.load.image('left-cap', 'assets/images/barHorizontal_green_left.png');
	    //this.load.image('middle', 'assets/images/barHorizontal_green_mid.png');
	    //this.load.image('right-cap', 'assets/images/barHorizontal_green_right.png');

	    //this.load.image('left-cap-shadow', 'assets/images/barHorizontal_shadow_left.png');
	    //this.load.image('middle-shadow', 'assets/images/barHorizontal_shadow_mid.png');
	    //this.load.image('right-cap-shadow', 'assets/images/barHorizontal_shadow_right.png');

    }
    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;
        
        //ATTACK BUTTON
        this.attackButton = this.add.sprite(WIDTH/2,HEIGHT/3,'yellowButton').setInteractive().setScale(1.5)
        this.attackText = this.add.text(0,0, "Attack",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.attackText, this.attackButton);

        // Grab global variables
        let attackOneName = this.registry.values.currentCharacter.moveset[0].attackName;
        let attackTwoName = this.registry.values.currentCharacter.moveset[1].attackName;

        this.attackButton.on('pointerdown', function(pointer) {
            //WORKING NOW
            this.firstOptionsInvisible();
            this.battleSelectionBox.setVisible(false);
            this.attack1 = this.add.sprite(WIDTH/2,HEIGHT/6,'yellowButton').setInteractive().setScale(1.5);
            this.attackText1 = this.add.text(0,0, attackOneName,{font: "35px Arial", fill: "brown"});
            centerButtonText(this.attackText1, this.attack1);

            // ATTACK1 FUNCTIONALITY
            this.attack1.on('pointerover', function(pointer) {this.attackBox1.setVisible(true)}.bind(this));
            this.attack1.on('pointerout',function(pointer){this.attackBox1.setVisible(false)}.bind(this));
            this.attack1.on('pointerdown',function(pointer){

                let selectedAttack = this.registry.values.currentCharacter.moveset[0];
                this.registry.set("selectedAttack", selectedAttack);
                //emit event
                this.events.emit('selectedAttack', selectedAttack);

            }.bind(this));

            this.attack2 = this.add.sprite(WIDTH/2,HEIGHT/6*2,'yellowButton').setInteractive().setScale(1.5);
            this.attackText2 = this.add.text(0,0, attackTwoName,{font: "35px Arial", fill: "brown"});
            centerButtonText(this.attackText2, this.attack2);

            // ATTACK2 FUNCTIONALITY
            this.attack2.on('pointerover', function(pointer) {this.attackBox2.setVisible(true)}.bind(this));
            this.attack2.on('pointerout',function(pointer){this.attackBox2.setVisible(false)}.bind(this));
            this.attack2.on('pointerdown',function(pointer){

                let selectedAttack = this.registry.values.currentCharacter.moveset[1];
                this.registry.set("selectedAttack", selectedAttack);
                //emit event
                this.events.emit('selectedAttack', selectedAttack);

            }.bind(this));

            this.attack3 = this.add.sprite(WIDTH/2,HEIGHT/6*3,'yellowButton').setInteractive().setScale(1.5);
            this.attackText3 = this.add.text(0,0, "Attack3",{font: "35px Arial", fill: "brown"});
            centerButtonText(this.attackText3, this.attack3);

            this.attack3.on('pointerover', function(pointer) {this.attackBox3.setVisible(true)}.bind(this));
            this.attack3.on('pointerout',function(pointer){this.attackBox3.setVisible(false)}.bind(this));
            this.attack3.on('pointerdown',function(pointer){


            }.bind(this))

            this.backButton = this.add.sprite(WIDTH/2,HEIGHT/6*4,'yellowButton').setInteractive().setScale(1.5);
            this.backText = this.add.text(0,0, "Back",{font: "35px Arial", fill: "brown"});
            centerButtonText(this.backText, this.backButton);

            this.backButton.on('pointerdown',function(pointer){
                this.scene.sleep('battleDialogue');
                this.secondMenuInvisible();
                this.firstMenuVisible();
                this.battleSelectionBox.setVisible(true);
                //this.battleDialogueBox.setVisible(false);

            }.bind (this));
        }.bind(this));

        //create textBox
        
        this.battleSelectionBox = createTextBox(this, WIDTH/5,HEIGHT/4*3, {
            wrapWidth: WIDTH/2,
            fixedWidth: WIDTH/2,
            fixedHeight: 150,
        })
        .start(battleSelectionDialogue, 50);
        
        this.attackBox1 = createTextBox(this, WIDTH/3,HEIGHT/5, {
            wrapWidth: WIDTH/3,
            fixedWidth: WIDTH/3.5,
            fixedHeight: 50,
        })
        .start(attackDescription1, 50).setVisible(false)

        this.attackBox2 = createTextBox(this, WIDTH/3,HEIGHT/5*1.82, {
            wrapWidth: WIDTH/3,
            fixedWidth: WIDTH/3.5,
            fixedHeight: 50,
        })
        .start(attackDescription2, 50).setVisible(false)

        this.attackBox3 = createTextBox(this, WIDTH/3,HEIGHT/5*2.65, {
            wrapWidth: WIDTH/3,
            fixedWidth: WIDTH/3.5,
            fixedHeight: 50,
        })
        .start(attackDescription3, 20).setVisible(false)
       
        /*
        this.battleDialogueBox = createTextBox(this, WIDTH/5,HEIGHT/4*3, {
            wrapWidth: WIDTH/2,
            fixedWidth: WIDTH/2,
            fixedHeight: 150,
        })
        .start(placeholderDialogue,50).setVisible(false)
        */
        

        //ITEM BUTTON
        this.itemButton = this.add.sprite(WIDTH/2,HEIGHT/2,'yellowButton').setInteractive().setScale(1.5)
        this.itemText = this.add.text(0,0, "Items",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.itemText, this.itemButton)

        this.itemButton.on('pointerdown', function (pointer) {
            //pop-up dialog
            var scene = this;
            Alert(scene,'Oops! No item available!')
        }.bind(this));

        //FLEE BUTTON
        this.leaveButton = this.add.sprite(WIDTH/2,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.leaveText = this.add.text(0,0, "Flee",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.leaveText, this.leaveButton)

        this.leaveButton.on('pointerdown', function (pointer) {
            var scene = this;
            Alert(scene, 'Cannot escape!')
        }.bind(this));
        
        //Button Event
        this.input.on('pointerover',function(event,gameObjects){gameObjects[0].setTexture('yellowButton1');});
        this.input.on('pointerout',function(event,gameObjects){gameObjects[0].setTexture('yellowButton')});

        // function to make first menu options invisible
        //function makeFirstOptionsInvisible () {
            //this.attackButton.setVisible(false);
            //this.leaveButton.setVisible(false);
            //this.leaveButton.setVisible(false);
        //}

        //test if import works
        // SHOULD SAY: 'WILL PERFORM BASIC ATTACK.' in action state
        //let test = this.registry.get("shark").moveset[0].description;
        //this.add.text(20, 80, test, {font: "25px Arial", fill: "yellow"}).setDepth(20);

        /*
        let chara = this.registry.get("shark");
        let moo = chara.currentHealth - 20;
        chara.currentHealth = moo;
        this.registry.set("shark", chara);
        let newchara = this.registry.get("shark");
        this.add.text(20, 80, newchara.currentHealth, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        */

        /*
        //FUNCTIONALITY TESTING
        let chara = this.registry.get("shark");
        let moo = chara.currentHealth - 20;
        chara.currentHealth = moo;
        this.registry.set("shark", chara);
        // change access values through values key
        this.registry.values.shark.currentHealth += 5;
        let newchara = this.registry.values.shark;
        this.add.text(20, 80, newchara.currentHealth, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        */

        // TEST TEXT
        //let ya = this.registry.values.currentCharacter.moveset[0].description;
        //this.add.text(20, 80, ya, {font: "25px Arial", fill: "yellow"}).setDepth(20);

        this.scene.get('HealthBar').events.on("completedAttack", this.updateDialogue.bind(this));
    }

    
    updateDialogue(someString){
        let formattedString = this.formatString(someString);
        placeholderDialogue = formattedString;

        this.scene.run('battleDialogue');

        // BREAKS HERE
        //let meow = "MEOW\nMEOW"
        //this.TESTTEXT = this.add.text(0,0, this.formatString(meow),{font: "100px Arial", fill: "brown"});

    }

    formatString(someString){
        let newString = someString.replaceAll(/\n/g, '\n\n\n\n');
        return newString;
    }
    
    

    update(){
        attackDescription1 = this.registry.values.currentCharacter.moveset[0].description;
        attackDescription2 = this.registry.values.currentCharacter.moveset[1].description;
        
        //works
        this.attackBox1.text = attackDescription1;
        this.attackBox2.text = attackDescription2;

    }

    firstOptionsInvisible(){
        this.attackButton.setVisible(false);
        this.attackText.setVisible(false);
        this.itemButton.setVisible(false);
        this.itemText.setVisible(false);
        this.leaveButton.setVisible(false);
        this.leaveText.setVisible(false);
    }

    secondMenuInvisible(){
        this.attack1.setVisible(false);
        this.attack2.setVisible(false);
        this.attack3.setVisible(false);
        this.attackText1.setVisible(false);
        this.attackText2.setVisible(false);
        this.attackText3.setVisible(false);
        this.backButton.setVisible(false);
        this.backText.setVisible(false);
    }

    firstMenuVisible(){
        this.attackButton.setVisible(true);
        this.attackText.setVisible(true);
        this.itemButton.setVisible(true);
        this.itemText.setVisible(true);
        this.leaveButton.setVisible(true);
        this.leaveText.setVisible(true);
 
    }
}

//const COLOR_PRIMARY = 0x4e342e;
//const COLOR_LIGHT = 0x7b5e57;
//const COLOR_DARK = 0x260e04;

var CreateAlertDialog = function (scene) {
    var dialog = scene.rexUI.add.dialog({
        width: 800,
        height: 250,
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 80, 0x4e342e),

        content: scene.add.text(0, 0, '', {
            fontSize: '40px',
            fontFamily: 'font1'
        }),

        actions: [
            scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0, 0, 400, 100, 20, 0x7b5e57),
                text: scene.add.text(0, 0, 'OK', {
                    fontSize: '24px'
                }),

                space: {
                    left: 60,
                    right: 60,
                    top: 15,
                    bottom: 15
                }
            })
        ],

        space: {
            //title: 25,
            content: 30,
            action: 25,
            left: 20,
            right: 20,
            top:80,
            bottom: 50,
        },

        align: {
            actions: 'center', // 'center'|'left'|'right'
        },

        expand: {
            content: false,  // Content is a pure text object
        }
    })
        .on('button.over', function (button, groupName, index, pointer, event) {
            button.getElement('background').setStrokeStyle(1, 0xffffff);
        })
        .on('button.out', function (button, groupName, index, pointer, event) {
            button.getElement('background').setStrokeStyle();
        });

    return dialog;
}

var SetAlertDialog = function (dialog, content) {
    if (content === undefined) {
        content = '';
    }
    dialog.getElement('content').text = content;
    return dialog;
}

var AlertDialog;
var Alert = function (scene, content, x, y) {
    if (x === undefined) {
        x = 960;
    }
    if (y === undefined) {
        y = 480;
    }
    if (!AlertDialog) {
        AlertDialog = CreateAlertDialog(scene)
    }
    SetAlertDialog(AlertDialog, content);
    AlertDialog
        .setPosition(x, y)
        .setVisible(true)
        .layout();

    return AlertDialog
        .moveFromPromise(1000, undefined, '-=400', 'Bounce')
        .then(function () {
            return scene.rexUI.waitEvent(AlertDialog, 'button.click');
        })
        .then(function () {
            return AlertDialog.moveToPromise(1000, undefined, '-=400', 'Back');
        })
        .then(function () {
            AlertDialog.setVisible(false);
            return Promise.resolve();
        })
}
