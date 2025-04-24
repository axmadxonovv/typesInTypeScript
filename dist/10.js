"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some   sound");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Bark");
    }
    wagTail() {
        console.log("Wagg");
    }
}
