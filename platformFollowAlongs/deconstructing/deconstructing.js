// ! dictionary deconstructing
const person =
{
    firstName: "Bob",
    lastName: "Marley",
    email: "bob@marley.com",
    password: "sekurep@ssw0rd9",
    addresses:
    [
        {
            address: "1600 Pennsylvania Avenue",
            city: "Washington, D.C",
            zipcode: "20500",
        },
        {
            address: "221B Baker St.",
            city: "London",
            zipcode: "WC2N 5DU",
        },
        {
            address: "123 America Ln.",
            city: "New York",
            zipcode: "12345"
        }
    ]
}


// ! notice the colon for renaming variables
const {firstName: bobsfirstname, lastName} = person;
console.log(bobsfirstname, lastName);

const {addresses: [address1]} = person;
const {addresses: [,address2]} = person;
const {addresses: [,,address3]} = person
// I can access dictionary values with dot notation
console.log(address1.zipcode)
console.log(address2.zipcode)
console.log(address3.zipcode)

// ! array deconstructing
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const [a] = animals
// console.log(a)

// ! OR I can do it one line:
const [a,b,c,d,e] = animals;
console.log(a);
console.log(b);

// ! deconstructing a list of functions

let state = "some value"
const useState = [
  //Array index 0; A Getter Function
  function() {
    console.log(state)
    return state
  },
  //Array index 1; A Setter Function
  function(newStateValue) {
    console.log("new value: " + newStateValue)
    state = newStateValue
    return state
  }
];

//Previous code here.
const [getter, setter] = useState;
getter() //Output: some value
setter("new state value after calling the setter") //Output: new state value after calling the setter
getter() //Output: new state value after calling the setter
