class BattleDialogue extends Phaser.Scene {
    constructor() {
        super("battleDialogue");
    }


    preload(){
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        //this.load.image('warrior', 'assets/images/warrior.png')
        //this.load.image('arrowSilver', 'assets/images/arrowSilver_right.png')
        //source: https://soundimage.org/looping-music/
        //this.load.audio('bgmusic', 'assets/music/Quirky-Puzzle-Game-Menu.mp3');
    }

    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        this.battleDialogueBox = createTextBox(this, WIDTH/5, HEIGHT/4*3, {
            wrapWidth: WIDTH/2,
            fixedWidth: WIDTH/2,
            fixedHeight: 150,
        })
        .start(placeholderDialogue, 50);

    }


    update() {}
}