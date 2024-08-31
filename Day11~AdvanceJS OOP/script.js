// Object-Oriented Programming (OOP) in JavaScript

// 1. Objects
console.log("1. Objects:");
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();

// 2. Classes
console.log("\n2. Classes:");
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getInfo() {
        return `${this.brand} ${this.model}`;
    }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getInfo());

// 3. Encapsulation
console.log("\n3. Encapsulation:");
class BankAccount {
    #balance = 0;  // Private field

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(100);
console.log(`Balance: ${account.getBalance()}`);

// 4. Inheritance
console.log("\n4. Inheritance:");
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();

// 5. Polymorphism
console.log("\n5. Polymorphism:");
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => console.log(`Area: ${shape.area().toFixed(2)}`));

// 6. Abstraction
console.log("\n6. Abstraction:");
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(`The ${this.type} is starting...`);
    }

    // Abstract method
    accelerate() {
        throw new Error("Method 'accelerate()' must be implemented.");
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super("motorcycle");
    }

    accelerate() {
        console.log("The motorcycle accelerates quickly!");
    }
}

const bike = new Motorcycle();
bike.start();
bike.accelerate();
