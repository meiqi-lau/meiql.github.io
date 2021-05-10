// object var config that can be passed into game
var config = {
    type: Phaser.CANVAS,
    backgroundColor: 0x000000,
    scale: {
        mode: Phaser.Scale.FIT, //make our canvas fit in the center of the website
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    // scenes are put into array for config
    scene: [
        StartScene, 
        CharacterDataLoader, 
        DialogueScene, 
        CharacterSelection, 
        ActionScene, 
        UIScene, 
        HealthBar,
        BattleDialogue,
        WinScene,
        LoseScene,
    /*EndUIScene*/]
}

// create an instance of the game
var game = new Phaser.Game(config);
