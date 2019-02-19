const carManager = require("./Car.js");
const garage= require("./ParkingLot.js");

var carFord= new carManager.Car("Fors", "Focus", 2014, "ABC-123");
console.log(carFord);
var carFiat = new carManager.Car("Fiat", "Punto", 2008, "DBE-987");
console.log(carFiat);
var carOpel = new carManager.Car("Opel", "Corsa", 2006, "AAA-111");
console.log(carOpel);

var Garage = new garage.ParkingLot(2);
console.log(Garage);

Garage.parkCar(carFord);
console.log(Garage);
console.log(carFord);

Garage.parkCar(carFiat);
console.log(Garage);
console.log(carFiat);