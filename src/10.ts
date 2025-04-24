class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Some   sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Bark");
  }

  wagTail(): void {
    console.log("Wagg");
  }
}
