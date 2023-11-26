export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`игрок ${character.name} уже есть в комнаде`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const arr = this.toArray();
    let current = 0;
    const last = arr.length;
    return {
      next() {
        current += 1;
        if (current <= last) {
          return {
            done: false,
            value: arr[current - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
