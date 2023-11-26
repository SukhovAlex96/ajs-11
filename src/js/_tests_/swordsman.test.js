import Swordsman from '../characters/swordsman';

test('class Swordsman should constructs object', () => {
  const input = ['test', 'swordsman'];
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Swordsman(input[0], input[1]);
  expect(received).toEqual(expected);
});
