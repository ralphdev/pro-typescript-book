// 3. Clases y Herencia

// Repetitivo
/*
class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log('Woof!');
  }
}*/

/*
class Cat {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log('Meow!');
  }
}
*/

// DRY
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log('Some sound!');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}
