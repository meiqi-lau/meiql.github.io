class CharacterDataLoader extends Phaser.Scene {
    // constructor function calls super(), which makes the class inherit 
    // all characteristics of predecessor Scene class
    // "bootGame" will be the identifier for the scene
    constructor() {
        super("characterDataLoader");
        
        this.basicAttack = {
            attackName : "Basic Attack",
            description : "Will perform a basic attack.",
            power : 20,
            accuracy : 1,
            stamina : 20,
            currentStamina : 20,
            effect : "none",
            effectValue : 0
        };

        this.throwDust = {
            attackName : "Throw Dust",
            description : "Throw dust into enemy's eyes.",
            power : 0,
            accuracy : 1,
            stamina : 15,
            currentStamina : 15,
            effect : "accuracy",
            effectValue : .75
        };

        this.burnyBurn = {
            attackName : "Burny Burn",
            description : "Has a 90% chance of burning opponent. Burning does 20 dmg each turn to opponent.",
            power : 0,
            accuracy : .9,
            stamina : 15,
            currentStamina : 15,
            effect : "burn",
            effectValue : 20
        }

        this.poisonousStab = {
            attackName : "Poisonous Stab",
            description : "Does 10 dmg to opponent. Poisons opponent. Poison does 5 dmg each turn to opponent.",
            power : 10,
            accuracy : 1,
            stamina : 15,
            currentStamina : 15,
            effect : "poison",
            effectValue : 5
        }

        this.weakAttack = {
            attackName : "Weak Attack",
            description : "Will perform a weak attack.",
            power : 10,
            accuracy : 1,
            stamina : 30,
            currentStamina : 30,
            effect : "none",
            effectValue : 0
        };

        this.basicEnemy = {
            name: "Shlies",
            maxHealth: 100,
            currentHealth: 100,
            moveset: [this.weakAttack]
        }

        this.shark = {
            name : "Shark",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [this.basicAttack, this.throwDust]
        };

        this.elda = {
            name: "Elda",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [this.basicAttack, this.burnyBurn]
        }

        this.lucas = {
            name: "Lucas",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [this.basicAttack, this.poisonousStab]
        }

        this.getMoveByName = function(movesetArray, nameOfAttack) {
            for (var i = 0; i < movesetArray.length; i++){
                if (movesetArray[i].attackName = nameOfAttack){
                    return movesetArray[i];
                }
            }
        }

    }

    create(){
        this.add.text(20, 60, "chracterdataloader", {font: "25px Arial", fill: "yellow"}).setDepth(20);

        // registry https://phaser.io/phaser3/devlog/119
        // https://photonstorm.github.io/phaser3-docs/Phaser.Data.DataManager.html
        this.registry.set("basicAttack", this.basicAttack);
        this.registry.set("throwDust", this.throwDust);
        this.registry.set("burnyBurn", this.throwDust);
        this.registry.set("poisonousStab", this.throwDust);
        this.registry.set("weakAttack", this.weakAttack);
        this.registry.set("basicEnemy", this.basicEnemy);
        this.registry.set("shark", this.shark);
        this.registry.set("elda", this.elda);
        this.registry.set("lucas", this.lucas);
        this.registry.set("getMoveByName", this.getMoveByName);
        
        //THIS WORKS!!!
        //let test = this.registry.get("shark").moveset[0].description;
        //this.add.text(20, 80, test, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        
        //let somfunction = this.registry.get("getMoveByName");
        //let sommoves = this.registry.get("shark").moveset;
        //let test2 = somfunction(sommoves, "Basic Attack").description;
        //this.add.text(20, 80, test2, {font: "25px Arial", fill: "yellow"}).setDepth(20);
    


        /*
        var basicAttack = {
            attackName : "Basic Attack",
            description : "Will perform a basic attack.",
            power : 30,
            accuracy : 1,
            stamina : 20,
            currentStamina : 20,
            effect : "none",
            effectValue : 0
        };

        var throwDust = {
            attackName : "Throw Dust",
            description : "Throw dust into enemy's eyes. Lowers their accuracy by 25%!",
            power : 0,
            accuracy : 1,
            stamina : 15,
            currentStamina : 15,
            effect : "accuracy",
            effectValue : .75
        };

        //this.add.text(20, 80, basicAttack.attackName, {font: "25px Arial", fill: "yellow"}).setDepth(20);

        var shark = {
            name : "Shark",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [basicAttack, throwDust]
        };

        function getMoveByName(movesetArray, nameOfAttack) {
            for (var i = 0; i < movesetArray.length; i++){
                if (movesetArray[i].attackName = nameOfAttack){
                    return movesetArray[i];
                }
            }
        }

        */

        //this.add.text(20, 80, getMoveByName(shark.moveset, "Basic Attack").power, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        

    }
}