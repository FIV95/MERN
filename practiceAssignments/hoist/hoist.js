// ! the following is an example of how I am to do this assignment:

//! GIVEN
// console.log(example);
// var example = "I'm the example!";
// * AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// ! problem 1:
// ! GIVEN
console.log(hello);
var hello = 'world'
// * AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello) // logs undefined
// var hello = 'world // this stays exactly the same.

//! problem 2:
// ! GIVEN
var needle = 'haystack';
test();
function test()
{
    var needle = `magnet`;
    console.log(needle);
}
// * AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // logs 'magnet'
// }
// needle = 'haystack';
// test();

// ! problem 3:
// ! GIVEN
var brendan = `super cool`;
function print(){
    brendan = `only okay`;
    console.log(brendan);
}
console.log(brendan);
// * AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print(){
//     brendan = `only okay`;
//     console.log(brendan);
// }
// brendan = `super cool`;
// console.log(brendan);

// ! problem 4:
// ! GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// * AFTER HOSTIGN BY THE INTERPRETER:
// chicken is logged
// eat function is invoked
// half-chicken is logged

// ! Problem 5:
// ! GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// * AFTER HOISTING BY THE INTERPRETER:
// mean function invoked
// chicken console.logged
// fish console.logged
// undefined console.log
// ! maybe code won't run because mean is mean is function expression TypeError

// ! problem 6:
// ! GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// * AFTER HOISTING BY THE INTERPRETER:
// undefined console.log
// rewind function is invoked
// genre gets reassigned "rock"
// r&b gets console.logged
// disco console.logged

// ! problem 7:
// ! GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// * AFTER HOISTING BY THE INTERPRETER:
// san jose doesnt get saved to a variable because no key word is used
// undefined console log
// learn function invoked
// dojo still doesnt exist because n okey word was used to declare it
// undefined console log
// dojo is finally declared with "burbank"
// burbank gets logged
// undefined gets logged again because there was no return value within the learn function

// ! Problem 8
// ! GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// outputs:
//{ "name": "Chicago", "students": 65, "hiring": true }
// runtime error on line




