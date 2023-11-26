import Team from '../team';
import Bowerman from '../characters/bowerman';
import Daemon from '../characters/daemon';
import Magician from '../characters/magician';

const playerBowerman = new Bowerman('test1');
const playerDaemon = new Daemon('test2');
const playerMagician = new Magician('test3');

test('method add of class Team should throw error', () => {
  const team1 = new Team();
  team1.add(playerBowerman);
  expect(() => {
    team1.add(playerBowerman);
  }).toThrowError(new Error(`игрок ${playerBowerman.name} уже есть в комнаде`));
});

test('method add of class Team should constructs Set', () => {
  const team1 = new Team();
  team1.add(playerBowerman);
  team1.add(playerDaemon);
  const expected = new Set([
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'test1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test2', type: 'daemon',
    },
  ]);
  expect(team1.members).toEqual(expected);
});

test('method addAll of class Team should constructs Set', () => {
  const team1 = new Team();
  team1.addAll(playerBowerman, playerDaemon, playerMagician);
  const expected = new Set([
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'test1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test2', type: 'daemon',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test3', type: 'magician',
    },
  ]);
  expect(team1.members).toEqual(expected);
});

test('method toArray of class Team should constructs array', () => {
  const team1 = new Team();
  team1.addAll(playerBowerman, playerDaemon);
  const expected = [
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'test1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test2', type: 'daemon',
    },
  ];
  expect(team1.toArray()).toEqual(expected);
});

test('class Team should be iterable', () => {
  const team1 = new Team();
  team1.addAll(playerBowerman, playerDaemon, playerMagician);
  const expected = [
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'test1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test2', type: 'daemon',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'test3', type: 'magician',
    },
  ];
  const result = [];
  for (const item of team1) {
    result.push(item);
  }
  expect(result).toEqual(expected);
});
