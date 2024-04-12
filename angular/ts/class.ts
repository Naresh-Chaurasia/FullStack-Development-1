// Define a simple class
class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('inside');
    }

    // Method
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class
const person1 = new Person("Alice", 30);

// Call the method
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
