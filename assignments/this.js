/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in the global scope, the global object (window/console) is 'this'
* 2. when a funtion is invoked by an object with dot notation, the object before the dot is 'this'
* 3. when a contructor func is used, 'this' refers to the object returned by the constructor
* 4. whenever call/apply are called, you explicitly define 'this' by passing them a parameter 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function addNumbers(num1, num2) {
    console.log(num1 + num2);
    console.log(this);
}
addNumbers(4, 5);

// Principle 2

// code example for Implicit Binding
const myCar = {
    type: 'sedan',
    color: 'white',
    start: function() {
        console.log(`Hey! I\'m a ${this.color} ${this.type}`);
        console.log(this);
    } 
}
myCar.start();

// Principle 3

// code example for New Binding
function GoodDog(doggo) {
    this.trick = 'shake';
    this.name = doggo;
    this.doTrick = function() {
        console.log(`Hi! My name is ${this.name} and I can ${this.trick}!`);
        console.log(this);
    }
}
const peanut = new GoodDog('Peanut');
peanut.doTrick();

// Principle 4

// code example for Explicit Binding
const keke = new GoodDog('Keeva');
const lissa = new GoodDog('Lissa');
keke.doTrick.apply(peanut);
lissa.doTrick.call(keke);