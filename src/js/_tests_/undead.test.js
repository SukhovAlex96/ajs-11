import Undead from '../characters/undead';

test('class Undead should constructs object', () => {
  const input = ['test', 'undead'];
  const expected = {
    name: 'test',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Undead(input[0], input[1]);
  expect(received).toEqual(expected);
});
