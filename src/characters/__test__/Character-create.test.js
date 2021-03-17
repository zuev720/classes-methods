import Character from '../Character';

it('Создание персонажа с именем меньше двух символов должен выбрасывать ошибку', () => {
  const error = 'Некорректное имя персонажа!';
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('D');
  }).toThrowError(error);
});

it('Создание персонажа с именем больше десяти символов должен выбрасывать ошибку', () => {
  const error = 'Некорректное имя персонажа!';
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('DudeDudeDudeDudeDude');
  }).toThrowError(error);
});

it('Персонаж с полем type не соответствующему имени класса должен выбрасывать ошибку', () => {
  const error = 'Некорректный тип персонажа!';
  expect(() => {
    const received = new Character('Dude');
    received.type = 'MegaCharacter';
  }).toThrowError(error);
});

it('Должен возвращать корректный type класса', () => {
  expect(new Character('Dude').type).toEqual('Character');
});

it('Создание персонажа должно совпадать', () => {
  expect(new Character('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Character',
    attack: 20,
    defence: 30,
    health: 80,
    level: 1,
  });
});

it('Создание персонажа не должно совпадать', () => {
  expect(new Character('Dude')).not.toEqual({
    _name: 'Dude',
    _type: 'Character',
    attack: 10,
    defence: 20,
    health: 50,
    level: 10,
  });
});
