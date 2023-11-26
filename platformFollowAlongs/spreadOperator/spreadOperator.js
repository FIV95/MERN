const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  // * This copies the person dictionary
const personCopy = person
personCopy.firstName = "Jason"
console.log(personCopy)

// ? what happens when i use a simpler dictionary

// const animal =
// {
//     type: "bird",
// }

// console.log("🚀 ~ file: spreadOperator.js:34 ~ animal:", animal)

// const animalCopy = animal
// animalCopy.type = "Turtle"

// console.log("🚀 ~ file: spreadOperator.js:39 ~ animal:", animal)

// console.log("Original: " + animal.type, "The Copy: " + animalCopy.type)

// *** const deep copy
const animal2 =
{
    type: "bird",
}

console.log(animal2);
const animalCopy2 = {...animal2 }
animal2.killcount = 25
animal2.type = "turtle"
console.log("original " + animal2.type + "new copy using spread: " + animal2.killcount + animal2.type);

// ! the rest operator used on array
let athletes = ["jordan", "alex", "bobby", "max", "tyler"];
const [...athleteCopy] = athletes;
console.log(athletes);
athleteCopy.push("jose");
console.log(athleteCopy)



