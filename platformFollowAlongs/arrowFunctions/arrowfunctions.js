// // ! REGULAR ES5 FUNCTION

// var sayHello = function(name) {
//     console.log('Hello ' + name);
// };

// // Using the function
// sayHello('John');  // Outputs: Hello John
// sayHello('Alice'); // Outputs: Hello Alice

// ! NEW ARROW FUNCTION

const sayHello = (name) => {
    console.log(`Hello ${name}`);
  };

  sayHello("Frankie")

  const addition = (x,y) =>
  {
    console.log(x+y)
    return x+y;
  }

  addition(10,15)

  const doAlotofStuff = (n,j,i) =>
  {
    for (let n = 0; n < 50;n++)
    {
        if (n % 2 === 0)
        {
            console.log(j);
        }
        else
        {
            console.log(i);
        }
    }
  }

  doAlotofStuff(5000,"iAmEven","iAmOdd")



const square = n => n * n;
console.log(square(10))

// ! long-hand way for arrow functions
const returnObjLonghand = () =>
{
  return
  (
  {
    firstName: "John",
    lastName: "Wick"
  }
  );
};

// ! creating copy using blueprint

const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

const obj =
{
  name: "Alan",
  es5Method: function ()
  {
    console.log(this.name)

  }
};
obj.es5Method();

// ! creating the copy
const newObj = {...obj, name: "Joe"}
console.log(newObj)
newObj.es5Method();

const objectArrow = {
  name : "John",
  arrowMethod: () => {
    console.log(this.name)
  }
};

const newObjectArrow = {...objectArrow, name: "Joe"}

console.log(newObjectArrow)

newObjectArrow.arrowMethod();



