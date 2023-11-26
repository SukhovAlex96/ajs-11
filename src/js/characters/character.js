export default class Character {
  constructor(name, type) {
    if ((typeof name === 'string') && (name.length > 2 && name.length < 11)) {
      this.name = name;
    } else {
      throw new Error('Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов');
    }
    const types = [
      'bowerman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie',
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Персонаж ${type} не существет`);
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= (points * (1 - this.defence / 100));
    } else {
      throw new Error('Нельзя атаковать умершего');
    }
  }
}
