console.log("---for loop---");

// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Loop through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("---while loop---");

// Define a variable to start counting
let count: number = 0;

// Execute a while loop while the count is less than 5
while (count < 5) {
    console.log("Count:", count);
    count++; // Increment the count by 1 in each iteration
}

console.log("---if else---");

// Define a variable
const age: number = 25;

// Check if the age meets a condition
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

console.log("---switch case---");

// Define a variable representing the day of the week (0 for Sunday, 1 for Monday, etc.)
const dayOfWeek: number = 3;

// Switch statement to determine the day of the week
switch (dayOfWeek) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Invalid day of the week.");
}
