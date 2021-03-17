import Character from '../Character';

it('Если здоровье персонажа <= 0, то метод levelUp() дожен выбразывать ошибку', () => {
  const error = 'Нельзя повысить левел умершего!';
  const character = new Character('Dude');
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrowError(error);
});

it('Если здоровье персонажа <= 0, то метод damage() дожен выбразывать ошибку', () => {
  const error = 'Нельзя нанести урон умершему персонажу!';
  const character = new Character('Dude');
  character.health = 0;
  expect(() => {
    character.damage(10);
  }).toThrowError(error);
});

it('При вызове метода levelUp(), полученные значения должны быть равны', () => {
  const character = new Character('Dude');
  character.levelUp();
  expect(character).toEqual({
    _name: 'Dude',
    _type: 'Character',
    attack: 24,
    defence: 36,
    health: 100,
    level: 2,
  });
});

it('Если в метод damage(points) не переданы параметры очков урона, то свойства персонажа остаются неизменными', () => {
  const character = new Character('Dude');
  character.damage();
  expect(character).toEqual({
    _name: 'Dude',
    _type: 'Character',
    attack: 20,
    defence: 30,
    health: 80,
    level: 1,
  });
});

it('При вызове метода damage(points), полученные значения должны быть равны', () => {
  const character = new Character('Dude');
  character.damage(10);
  expect(character).toEqual({
    _name: 'Dude',
    _type: 'Character',
    attack: 20,
    defence: 30,
    health: 73,
    level: 1,
  });
});
