"use strict";
class Car {
    brand;
    serialNumber;
    model;
    constructor(brand, serialNumber, model) {
        this.brand = brand;
        this.serialNumber = serialNumber;
        this.model = model;
    }
    getSerialNumber() {
        return this.serialNumber;
    }
}
class ElectricCar extends Car {
    constructor(brand, serialNumber, model) {
        super(brand, serialNumber, model);
        console.log(this.model);
    }
}
