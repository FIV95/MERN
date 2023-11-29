const arr = [1,2,3,4,5];
arr.push(300);
console.log(arr)

// ! if we use freeze we cant change anything without copying it
const arr2 = Object.freeze([1,2,3,4,5]);
// arr2.push(300);



const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

// this code makes a copy of that list of dicitonaries. after the spread operator we just add the dictionary
// const newList = [...groceryList, {"item": "thyme", "haveIngredient": false}]
// console.log(newList);

// ! OR I THINK WE CAN concat these two instead of using spread
const newList = groceryList.concat([{"item": "thyme", "haveIngredient": false}])
console.log('newList: ', newList);

// * thyme is actually added on as the last element in that list - INDEX 5

const gotTheThyme = [...newList.slice(0,5), {...newList[5], "haveIngredient": true}];
console.log('gotTheThyme: ', gotTheThyme);

// ! we can write this monstrosity differently

// Copy the first 5 eleents of newList into a new array
const firstFiveitems = newList.slice(0,5);

// Copy the 6th item and pdate the `haveIngredient` key to true
const updatedItem = {...newList[5], "haveIngredient": true};

// Combine the two into a new array
const gotTheThymeNicer = [...firstFiveitems, updatedItem]

const removingCelery = [...gotTheThyme.slice(0,2), ... gotTheThyme.slice(3)];
console.log('removingCelery: ', removingCelery);

// ! we can re-write this monstrosity
let gotTheThymeCopy = [...gotTheThyme];
gotTheThymeCopy.splice(2,1);
console.log('gotTheThymeCopy: ', gotTheThymeCopy);


// !! the following sections are regarding .sort()

const numbers = [10,5,3,12,22,8]
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log('sortedNumbers: ', sortedNumbers);
// The sort() method compares pairs of elements in the array using the comparison function (a, b) => a - b.

// Here's a simplified step-by-step breakdown:

// First, sort() might compare 10 and 5 (the actual order of comparisons can vary depending on the JavaScript engine). The comparison function returns 10 - 5 = 5, which is greater than 0, so sort() places 5 before 10.

// Next, it might compare 10 and 3. The function returns 10 - 3 = 7, which is greater than 0, so sort() places 3 before 10.

// This process continues, with sort() comparing pairs of elements and reordering them based on the result of the comparison function.

// After several comparisons and reordering operations, the array becomes sorted in ascending order: [3, 5, 8, 10, 12, 22].

// Remember, the actual order of comparisons and the intermediate steps can vary depending on the JavaScript engine and the specific sorting algorithm it uses. But this gives you a general idea of how sort() uses the comparison function to sort the array.

const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Moby-Dick', author: 'Herman Melville' },
    { title: 'War and Peace', author: 'Leo Tolstoy' }
];

const sortedAuthors = [...books].sort( (a,b) => a.author > b.author ? 1 : -1);
console.log('sortedAuthors: ', sortedAuthors);

console.log(books.toSorted((a,b) => a.author > b.author ? 1 : -1));


