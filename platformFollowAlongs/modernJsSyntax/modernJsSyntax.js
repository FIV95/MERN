let helloVar = "Hello";

// NEW arrow function
const helloWorld = (b) =>
{
    console.log(helloVar + b);
}

helloWorld(" frankie");

// Hash table or Dictionary/Object
const donDuck =
{
    firstName: "Donald",
    lastName: "Duck",
    age: 80,
}

const { firstName, lastName, age } = donDuck

console.log(firstName)
console.log(lastName)
console.log(age)

// Extra Example
const objectBeingDestructed =
{
    propertyKey1: "PropertyValue1",
    propertyKey2: "PropertyValue2",
}

let {propertyKey1, propertyKey2} = objectBeingDestructed;
console.log("PropertyKey1's Value is ", propertyKey1);
console.log("PropertyKey2's Value is ", propertyKey2);

// Modern JS Array
const seaCreatures = ["crab", "swordfish", "jellyfish", "squid"]
// Modern JS Setting Object Literal Properties to Variables
const [a, b, c, d] = seaCreatures;
// Logging Array Indices
console.log(a, b, c, d)