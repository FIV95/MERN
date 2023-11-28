class Vehicle
{
    constructor(manufacturer, model, color)
    {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }


    drive()
    {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} on it.`);
    }
}

// ! creating and using a new instance of Vehichle woudl like this:
const car = new Vehicle("BMW", "M5", "blue");
car.drive();
console.log(car.miles);

class M5 extends Vehicle
{
    constructor(color)
    {
        super("BMW", "M5", color);
        this.hp = 616;
    }

    // * class method of m5
    printSpecSummary = () =>
    {
        console.log(`BMW M5 with a 4.4L V8 Turbo engine packing ${this.hp}HP and 553 lb-ft TQ`);
    }
}

const mycar = new M5("blue");
mycar.printSpecSummary()
mycar.drive()
