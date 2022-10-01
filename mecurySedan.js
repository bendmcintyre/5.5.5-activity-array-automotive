//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle;

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
      if (num + this.passenger <= this.maximumPassengers) {
        return (this.passenger = num);
      } else {
        console.log(
          `${this.make} ${this.model} does not have enough space to take all passengers.`
        );
      }
    } else {
      console.log(`${this.make} ${this.model} is full.`);
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("Engine has started.");
      return (this.started = true);
    } else {
      console.log("No fuel.");
      return (this.started = false);
    }
  }

  scheduelService(mileage) {
    if (this.mileage > 30000) {
      console.log("Time for maintenace.");
      return (this.scheduelService = true);
    }
  }
}
