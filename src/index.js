import Character from './characters/Character';

const character = new Character('Dude');
console.log(character);
character.levelUp();
console.log(character);
character.damage(10);
console.log(character);
