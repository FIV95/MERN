// ?? Question 1:

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// * MY ANSWERS
// ! prediction
// ['Telsa', 'Mercedes', 'Honda'];
// ['Mercedes'];
// ! real output
// Telsa
// Mercedes
// ! in order to get Honda to console you could:
const [,,honda] = cars;
console.log('honda: ', honda);

// ?? Question 2:
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
// console.log(employeeName); commented to run code

// * MY ANSWERS
// ! prediction
// the first log statement will print al the details of the employee dictionary
// the second log statement will not print because we have 'employeeName is not a variable
// ! real output
// Elon // I didnt realize the key in the dictionary was actually called employeeName
// ReferenceError: employeeName is not defined
// in order to get employeeName to log we could make a copy of employee
// we can accomplish this by using the spread operator
const {...employeeCopy} = employee;
console.log(employeeCopy.employeeName)
// this allows us to use both the new otherName variable and the employeeName variable

// ?? Question 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
// const { password: hashedPassword } = person; commented code to correct later
//Predict the output
console.log(password);
// console.log(hashedPassword); commented code to correct later

// * MY ANSWERS
// ! prediction
// 12345
// 12345
// ! real output
// 12345
// undefined
// the problem with Line 52 - The HashedPassword is that the const password isnt
// techincally inside of the person dictionary to begin with
// we can simply fix this by adding the password to the person dictionary
person.password = password
// we can then attempt alias the password as hashedpassword again
const { password: hashedPassword } = person;
console.log(hashedPassword)
// while techincally not hashed the solution above does allow both log statements to work

// ?? Question 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log('second: ', second);
console.log(first === third);
console.log('third: ', third);
console.log('first: ', first);


// * MY ANSWERS
// ! prediction
// 5 line 78 is telling us that 2(the first number will be 5 because its the 4th number in the array )
// 8
// ! real output
// false we are actually comparing the indexes in this case 5 equal to 2
// true // BUT 2 is equal to 2
const [,,,fourthnumber] = numbers;
console.log('fourthnumber: ', fourthnumber);

// ?? Question 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// * MY ANSWERS
// ! prediction
// undefined
// [1,5,1,8,3,3]
// 1
// 5
// ! real output
// value this prints because the value of key in last test has the value- value
// 1,5,1,8,3,3 // the key secondKey has the value of an entire array associated with it
// 1 // grabs the first index of the secondKey array
// 5 // copies the first index of secondKey but under a new alias - willThisWork
console.log(lastTest.secondKey[5])

// ?? Question 6:

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// * MY ANSWERS
// ! the scope titles:
// global - beatles
// printNames function scope
// actuallyPrintinNames scope - index
// i believe that because of the usage of var the foor loop does not have its own scope
//Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4


// ? Question 7:
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }

// ! predictions
// I think this code will not actually log anything. The use of let sets the variables name
// within the actuallyPrintingNames scope


// ?? Question 8:
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// * MY ANSWER
// beatles is a global constant array
// actuallyPrintingNames is always called whenver printNames is invoked
// The arguement passed into names for printNames get used in the actuallyprintingNames Function
//I dont think we can use a const in the loop because the loop will always be changing each pass?

// ?? Question 9:
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0])
console.log(planet === planetCopy)

// * MY ANSWER
// ! predictions
// planetCopy is cloning the planet dictionary using the spread operator
// therefor the console.log on L:192 will return true
// The same will be said for the console.log on L:193.
// ! real output
// true
// false
// After researching primitive values like booleans, numbers and strings are compared strictly by by value
// however objects, functions and arrays are only compared by reference. not their content.
// so even though their values are identical they location in memory is different so they are not equal





