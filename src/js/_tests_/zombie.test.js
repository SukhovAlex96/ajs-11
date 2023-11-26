import Zombie from '../characters/zombie';

test('class Zombie should constructs object', () => {
  const input = ['test', 'zombie'];
  const expected = {
    name: 'test',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Zombie(input[0], input[1]);
  expect(received).toEqual(expected);
});
