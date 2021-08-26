interface Logistic {
  operation(): string;
}

class Truck implements Logistic {
  public operation() {
    return 'Truck operation on road';
  }
}

class Train implements Logistic {
  public operation(): string {
    return 'Train operation on railroads';
  }
}

class VehicleFactory {
  public static createVehicle(vehicleType: 'truck' | 'train'): Logistic {
    if (vehicleType === 'truck') {
      return new Truck();
    } else if (vehicleType === 'train') {
      return new Train();
    } else {
      throw new Error(`How is it possible: ${vehicleType}`);
    }
  }
}

const truck = VehicleFactory.createVehicle('truck');
console.log(truck.operation());

const train = VehicleFactory.createVehicle('train');
console.log(train.operation());
