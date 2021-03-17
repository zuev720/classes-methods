export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 80;
    this.level = 1;
    this.attack = 20;
    this.defence = 30;
    this.type = this.constructor.name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Некорректное имя персонажа!');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value !== this.constructor.name) {
      throw new Error('Некорректный тип персонажа!');
    }
    this._type = value;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего!');
    }
    this.attack += (this.attack * 0.2);
    this.defence += (this.defence * 0.2);
    this.health = 100;
    this.level += 1;
  }

  damage(points) {
    if (!points) {
      return;
    }
    if (this.health <= 0) {
      throw new Error('Нельзя нанести урон умершему персонажу!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
