const person = {
    name: "Alice",
    greet: function(name) {
        this.name = name;
        console.log("Hello, my name is " + person.name);
    }
};

person.greet('NC'); // Output: Hello, my name is Alice
