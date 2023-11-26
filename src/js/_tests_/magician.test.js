import Magician from '../characters/magician';

test('class Magician should constructs object', () => {
  const input = ['test', 'magician'];
  const expected = {
    name: 'test',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Magician(input[0], input[1]);
  expect(received).toEqual(expected);
});
