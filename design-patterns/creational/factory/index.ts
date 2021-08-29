import { Logistic, VehicleFactory } from './vehicle';

const truck: Logistic = VehicleFactory.createVehicle('truck');
console.log(truck.operation());

const train: Logistic = VehicleFactory.createVehicle('train');
console.log(train.operation());
