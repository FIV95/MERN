const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>`);
console.log(groceryList);

// this syntax replaces this for loop:
//! for (let i = 0; i < groceries.length; i++) {
//!     groceryList.push(`<li>${groceries[i]}</li>`);
//!   }


// contrary to Map . forEach calls a function on each element in an array
// this does the same thing
//! groceries.forEach(item => {
//!     groceryList.push(`<li>${item}</li>`);
//!   });

//!   console.log(groceryList);

const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Mary', lastName: 'Johnson' },
    { firstName: 'James', lastName: 'Smith' },
    { firstName: 'Patricia', lastName: 'Williams' }
];

const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);
console.log('fullNames: ', fullNames);

const numbers = [5, 10, 15, 20, 25];
const squares = numbers.map(n => n * n);
console.log('squares: ', squares);


// ! using .filter() questions:
const numbers2 = [5,10,15,20,25,30,35];

const greaterThan20 = numbers2.filter( n => n > 20);
console.log('greaterThan20: ', greaterThan20);

// ! using .filter() on a list dictionary:
const people2 = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Mary', lastName: 'Johnson', age: 35 },
    { firstName: 'James', lastName: 'Smith', age: 40 },
    { firstName: 'Patricia', lastName: 'Williams', age: 45 },
    { firstName: 'Laura', lastName: 'Lee', age: 50 },
    { firstName: 'Lucas', lastName: 'Lopez', age: 55 },
    { firstName: 'Liam', lastName: 'Lynch', age: 60 }
  ];

const namesWL = people2.filter(person => person.lastName[0] === `L`);
console.log('namesWL: ', namesWL);

const over40AndFullnames = people2.filter(person => person.age >= 40).map(person => `${person.firstName} ${person.lastName}`);
console.log('over40AndFullnames: ', over40AndFullnames);

// ! problems using .reduce()

const monthlyBudget = 3000;
const expenses = [300, 200, 454, 225, 1200];

bankBalance = expenses.reduce((acc, curr) => acc - curr, monthlyBudget);

console.log(bankBalance);

const numbers3 = [5,10,15,20,25];
const arraySum = numbers3.reduce((acc,curr) => acc + curr, 0);
console.log('arraySum: ', arraySum);

// ! advanced used case:
const products = [
    { category: 'Electronics', price: 100 },
    { category: 'Electronics', price: 200 },
    { category: 'Clothing', price: 50 },
    { category: 'Clothing', price: 80 },
    { category: 'Furniture', price: 300 },
    { category: 'Furniture', price: 400 }
];

const totalByCategory = products.reduce((totals, product) => {
    if (!totals[product.category]) {
        totals[product.category] = 0;
    }
    totals[product.category] += product.price;
    return totals;
}, {});

console.log(totalByCategory);

// 1. `reduce()` is a method that operates on an array. It takes two arguments: a callback function and an initial value. The callback function itself takes two arguments: an accumulator and the current element of the array.

// 2. In this case, the array is `products`, the initial value is an empty object `{}`, and the callback function is `(totals, product) => {...}`. The accumulator is `totals`, and the current element is `product`.

// 3. For each `product` in the `products` array, the callback function checks if `product.category` is already a key in the `totals` object. If it's not, it adds `product.category` as a key with a value of `0`.

// 4. Then it adds `product.price` to the value of `product.category` in the `totals` object.

// 5. It returns the `totals` object, which becomes the accumulator for the next iteration.

// 6. After all iterations, `reduce()` returns the final `totals` object, which is an object where the keys are product categories and the values are the total prices for each category.

// 7. This final `totals` object is stored in the `totalByCategory` variable and then logged to the console.

// So, if you run this code with the given `products` array, it will print:

// ```javascript
// { Electronics: 300, Clothing: 130, Furniture: 700 }
// ```

// This means the total price for the 'Electronics' category is 300, for 'Clothing' it's 130, and for 'Furniture' it's 700.

