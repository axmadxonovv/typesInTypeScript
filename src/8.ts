class Car {
  public brand: string;
  private serialNumber: string;
  protected model: string;

  constructor(brand: string, serialNumber: string, model: string) {
    this.brand = brand;
    this.serialNumber = serialNumber;
    this.model = model;
  }

  public getSerialNumber(): string {
    return this.serialNumber;
  }
}

class ElectricCar extends Car {
  constructor(brand: string, serialNumber: string, model: string) {
    super(brand, serialNumber, model);
    console.log(this.model);
  }
}
