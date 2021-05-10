// NOTE, always include .js in file extension 
import {CharacterTemplate} from './CharacterTemplate.js';
import {basicAttack, throwDust} from './AttackList.js';


// node --experimental-modules --es-module-specifier-resolution=node Characters\CharacterList.js
// TESTING TO SEE IF IMPORTS ACTUALLY WORK
//------------------------------------------
//console.log("hi");
//console.log(basicAttack.attackName);

//to test file, make sure to do in terminal: node Characters\CharacterList.js

// Make a character and assign it to a name
var shark = new CharacterTemplate("Shark");
shark.maxHealth = 100;
shark.currentHealth = 100;

//insert values into array
//note it refers to the object 
shark.moveset = [basicAttack, throwDust];

//tests
//-------------------------
//console.log(shark.moveset[0]);
//console.log(`The description of Throw Dust is: "${shark.moveset[1].description}"`);

//function for getting element from array by name
//accepts an array
function getMoveByName(movesetArray, nameOfAttack) {
    for (var i = 0; i < movesetArray.length; i++){
        if (movesetArray[i].attackName = nameOfAttack){
            return movesetArray[i];
        }
    }
}

// example of getting power of move
//console.log(getMoveByName(shark.moveset, "Basic Attack").power);

export {shark, getMoveByName};




