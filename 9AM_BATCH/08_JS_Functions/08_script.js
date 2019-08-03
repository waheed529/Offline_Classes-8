// Declare a Function
function printNumbers(startNumber , endNumber , increNumber) {
    let result = '';
    for(let i = startNumber; i<= endNumber; i+= increNumber){
        result += `${i} `;
    }
    console.log(result);
}
// Execute a function
printNumbers(10 , 100 , 5);
printNumbers(100 , 1000 , 100);

// Function without Arguments
function greet() {
    console.log('Welcome to JS functions');
}
greet();

// Function with arguments
function greetArgs(name,age) {
    console.log(`Hello ${name} You are ${age} Years of Old!`);
}
greetArgs('John',40);

// Function with Return type
function addition(a , b) {
    let sum = a + b;
    return sum;
}
let result = addition(10,20);
console.log(result);

// Function Expression
let sum = function(a , b) {
    let add = 20 * (a + b);
    return add;
};
result = sum(10,20);
console.log(result);

// Object as a Parameter (cond.. Monday)


