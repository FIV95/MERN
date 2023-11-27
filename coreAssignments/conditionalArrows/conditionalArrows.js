// ! problem 1 - AGE CHECKER

const ageChecker = (age) => {
    return age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"
}

console.log(ageChecker(15))
console.log(ageChecker(18),"\n")

// ! problem 2 - RAIN CHECKER

const rainChecker = (isRaining) => {
    return isRaining ? "Get your rain jacket!" : "No rain on today's forecase!"
}

console.log(rainChecker(true))
console.log(rainChecker(false), "\n")

// ! problem 3 - EVEN CHECKER

const evenChecker = (n) => {
    return n % 2 === 0 ? "Number is even" : "Number is Odd";
}

console.log(evenChecker(1));
console.log(evenChecker(2),"\n");

// ! problem 4 - NUMBER COMPARISON

const numComparison = (n,i) => {
    return n > i ? `${n} is greater than ${i}` : `${n} is less than ${i}`;
}

console.log(numComparison(5,10))
console.log(numComparison(15,5),"\n")