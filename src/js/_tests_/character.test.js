import Character from '../characters/character';

test.each([
  [['t', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['asdfghjkloiu', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['12', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
])(
  ('class Character should throw name error'),
  (input, expected) => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Character(input[0], input[1]);
    }).toThrowError(new Error(expected));
  },
);

test('class Character should throw type error', () => {
  const input = ['test', 'undea'];
  expect(() => {
    // eslint-disable-next-line no-new
    new Character(input[0], input[1]);
  }).toThrowError(new Error(`Персонаж ${input[1]} не существет`));
});

test('class Character should constructs object', () => {
  const input = ['test', 'swordsman'];
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  const received = new Character(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('method levelUp of class Character should throw error', () => {
  const input = ['test', 'undead'];
  const received = new Character(input[0], input[1]);
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('method levelUp of class Character should increase level & health', () => {
  const input = ['test', 'magician'];
  const expected = {
    name: 'test',
    type: 'magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  };
  const received = new Character(input[0], input[1]);
  received.health = 70;
  received.attack = 10;
  received.defence = 10;
  received.levelUp();
  expect(received).toEqual(expected);
});

test('method damage of class Character should throw error', () => {
  const input = ['test', 'undead'];
  const received = new Character(input[0], input[1]);
  received.health = 0;
  expect(() => {
    received.damage(2);
  }).toThrowError(new Error('Нельзя атаковать умершего'));
});

test('method demage of class Character should decrease health', () => {
  const input = ['test', 'swordsman'];
  const healthExpected = 70 - (20 * (1 - 50 / 100));
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: healthExpected,
    level: 1,
    attack: undefined,
    defence: 50,
  };
  const received = new Character(input[0], input[1]);
  received.health = 70;
  received.defence = 50;
  received.damage(20);
  expect(received).toEqual(expected);
});
