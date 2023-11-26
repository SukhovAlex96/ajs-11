import Bowerman from '../characters/bowerman';

test('class Bowerman should constructs object', () => {
  const input = ['test', 'bowerman'];
  const expected = {
    name: 'test',
    type: 'bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Bowerman(input[0], input[1]);
  expect(received).toEqual(expected);
});
