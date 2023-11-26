import Daemon from '../characters/daemon';

test('class Daemon should constructs object', () => {
  const input = ['test', 'daemon'];
  const expected = {
    name: 'test',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Daemon(input[0], input[1]);
  expect(received).toEqual(expected);
});
