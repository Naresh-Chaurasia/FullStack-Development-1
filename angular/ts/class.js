// Define a simple class
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
        console.log('inside');
    }
    // Method
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Create an instance of the class
var person1 = new Person("Alice", 30);
// Call the method
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
