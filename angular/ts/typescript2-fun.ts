// Passing function as argument
// Define a function that takes another function as an argument
function applyOperation(operation: Function, a: number, b: number): number {
    return operation(a, b);
}

// Define two simple operations
function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    return x / y;
}

// Call the higher-order function with different operations
const result1 = applyOperation(multiply, 5, 3); // Multiply 5 and 3
console.log("Result of multiplication:", result1); // Output: Result of multiplication: 15

const result2 = applyOperation(divide, 10, 2); // Divide 10 by 2
console.log("Result of division:", result2); // Output: Result of division: 5

//-------------------------

//Returning Functions
// Define a function that returns another function
function createMultiplier(factor: number): Function {
    // This inner function is returned by the outer function
    return function (number: number): number {
        return number * factor;
    };
}

// Create a multiplier function with a specific factor
const double = createMultiplier(2); // Create a function that doubles a number
const triple = createMultiplier(3); // Create a function that triples a number

// Use the created multiplier functions
console.log(double(5)); // Output: 10 (5 * 2)
console.log(triple(5)); // Output: 15 (5 * 3)

