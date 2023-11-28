class Vehicle {
	constructor(manufacturer, model, color) {
		this.miles = 0;
		this.manufacturer = manufacturer;
		this.model = model;
		this.color = color;
	}

	drive() {
		this.miles += 10;
	}
}

// ! creating and using a new instance of Vehichle woudl like this:
const car = new Vehicle("BMW", "M5", "blue");
car.drive();
console.log(car.miles);
