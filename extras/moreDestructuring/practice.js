// ! problem 1

let user = {
    firstName: "John",
    lastName: "Doe"
};

const fullName = ({firstName, lastName}) =>
    {
        return `${firstName} ${lastName}`;
    }

console.log(fullName(user));

const {firstName: first, lastName: last} = user;
console.log(first);

// ! problem 2

let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
];

const getYoungestStudent = (array) =>
    {
        let youngest = array[0];
        for (let element of array)
        {
            if (element.age < youngest.age)
            {
                youngest = element
            }
        }
        return youngest;
    }

console.log(getYoungestStudent(students))


// ! problem 3

let location = {
    latitude: 40.7128,
    longitude: 74.0060
};

const getCoordinates = ({latitude,longitude}) =>
    {
        return [latitude, longitude];
    }

console.log(getCoordinates(location))

// ! problem 4

let numbers = [5, 3, 9, 1, 6];

const getMinMax = (array) =>
    {
        let min = array[0];
        let max = array[0];
        for (let n of array)
        {
            if (n < min)
            {
                min = n;
            }
            if (n > max)
            {
                max = n;
            }
        }
        return {minimum: min, maximum: max};
    }
console.log(getMinMax(numbers));
const {minimum, maximum} = getMinMax(numbers);
console.log(minimum, maximum);

// ! problem 5
let array = ["apple", "banana", "cherry", "date", "elderberry"];

const getFirstTwo = (array) =>
    {
        let newArray = [array[0], array[1]];
        return newArray;
    }

    console.log(getFirstTwo(array))